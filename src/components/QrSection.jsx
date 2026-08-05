import { useReveal } from "../hooks/useReveal";
import QrCode from "./QrCode";

export default function QrSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className={`glass panel reveal qr-panel${visible ? " in" : ""}`}>
      <div className="eyebrow">שיתוף מהיר</div>
      <h2 style={{ fontSize: 19, marginBottom: 14, textAlign: "center" }}>
        כדי שלא תצטרכו לחפש אותנו שוב
      </h2>
      <div className="qr-row">
        <div className="qr-box" aria-hidden="true">
          <QrCode />
        </div>
        <div className="qr-copy">
          <p>סרקו עם מצלמת הנייד לשמירה באנשי הקשר.</p>
        </div>
      </div>
    </section>
  );
}
