import { forwardRef, useEffect, useRef, useState } from "react";
import { telHref } from "../data/biz";

const AccessibilityPanel = forwardRef(function AccessibilityPanel(_, dialogRef) {
  const [bigText, setBigText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [noMotion, setNoMotion] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--fs", bigText ? "1.2" : "1");
  }, [bigText]);

  useEffect(() => {
    document.body.classList.toggle("hc", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle("no-motion", noMotion);
  }, [noMotion]);

  function reset() {
    setBigText(false);
    setHighContrast(false);
    setNoMotion(false);
  }

  function openDialog() {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <button
        className="a11y-fab"
        type="button"
        aria-label="פתיחת תפריט נגישות"
        aria-haspopup="dialog"
        onClick={openDialog}
      >
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="4.2" r="1.8" />
          <path d="M4.5 8.2c4.8 1.4 10.2 1.4 15 0M12 8.6v6m0 0-3 6.2m3-6.2 3 6.2" />
        </svg>
      </button>

      <dialog ref={dialogRef} aria-labelledby="a11yTitle">
        <h2 id="a11yTitle">נגישות</h2>
        <div className="a11y-opts">
          <button type="button" aria-pressed={bigText} onClick={() => setBigText((v) => !v)}>
            הגדלת גודל הטקסט
          </button>
          <button
            type="button"
            aria-pressed={highContrast}
            onClick={() => setHighContrast((v) => !v)}
          >
            ניגודיות גבוהה
          </button>
          <button type="button" aria-pressed={noMotion} onClick={() => setNoMotion((v) => !v)}>
            עצירת אנימציות
          </button>
          <button type="button" onClick={reset}>
            איפוס הגדרות
          </button>
        </div>
        <h2 style={{ fontSize: 19 }}>הצהרת נגישות</h2>
        <p>
          אתר זה נבנה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
          נגישות לשירות), התשע״ג־2013 ולתקן הישראלי 5568 ברמה AA.
        </p>
        <ul>
          <li>ניווט מלא באמצעות מקלדת וסימון מיקוד ברור</li>
          <li>תמיכה בקוראי מסך, מבנה סמנטי ותיאורים חלופיים</li>
          <li>יחסי ניגודיות תקניים ואפשרות להגדלת טקסט</li>
          <li>כיבוד העדפת המערכת לצמצום תנועה</li>
        </ul>
        <p>
          רכז הנגישות: נתנאל זולאית ·{" "}
          <a href={telHref} dir="ltr">
            054-420-2284
          </a>
          . נתקלתם בבעיה? נשמח לשמוע ולתקן.
        </p>
        <button className="close-x" type="button" onClick={() => dialogRef.current?.close()}>
          סגירה
        </button>
      </dialog>
    </>
  );
});

export default AccessibilityPanel;
