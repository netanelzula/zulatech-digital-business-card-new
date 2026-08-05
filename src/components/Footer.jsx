import { useState, useRef } from "react";
import { BIZ } from "../data/biz";

function downloadVcf() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${BIZ.name};;;`,
    `FN:${BIZ.name} – ${BIZ.owner}`,
    `ORG:${BIZ.name}`,
    `TITLE:${BIZ.tagline}`,
    `TEL;TYPE=CELL:${BIZ.phone}`,
    `ADR;TYPE=WORK:;;${BIZ.address};;;;`,
    `URL:${BIZ.website}`,
    BIZ.email ? `EMAIL:${BIZ.email}` : "",
    "END:VCARD",
  ].filter(Boolean);
  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Zulatech.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

export default function Footer({ onOpenA11y }) {
  const [shareLabel, setShareLabel] = useState("שיתוף הכרטיס");
  const timeoutRef = useRef(null);

  async function handleShare() {
    const data = {
      title: `${BIZ.name} | ${BIZ.tagline}`,
      text: "כרטיס הביקור הדיגיטלי של Zulatech",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* user cancelled — no-op */
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel("הקישור הועתק");
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShareLabel("שיתוף הכרטיס"), 1800);
      } catch {
        /* clipboard unavailable — no-op */
      }
    }
  }

  return (
    <footer className="reveal in">
      <div className="foot-actions">
        <button className="cta" type="button" onClick={downloadVcf}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
            <circle cx="12" cy="8" r="3.4" />
          </svg>
          שמירה לאנשי הקשר
        </button>
        <button className="cta" type="button" onClick={handleShare} aria-live="polite">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="2.6" />
            <circle cx="6" cy="12" r="2.6" />
            <circle cx="18" cy="19" r="2.6" />
            <path d="M8.4 10.8 15.6 6.4M8.4 13.2l7.2 4.4" />
          </svg>
          {shareLabel}
        </button>
      </div>
      <p>
        Zulatech · {BIZ.address} ·{" "}
        <a
          href="#a11y"
          onClick={(e) => {
            e.preventDefault();
            onOpenA11y();
          }}
        >
          הצהרת נגישות
        </a>
      </p>
    </footer>
  );
}
