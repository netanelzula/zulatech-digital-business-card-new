import logo from "../assets/logo.png";
import { BIZ, waHref, telHref } from "../data/biz";
import { IconWhatsapp } from "./icons";

export default function Hero() {
  return (
    <header className="hero glass">
      <div className="hero-glint" aria-hidden="true"></div>
      <div className="seal" aria-label="20 שנות ניסיון">
        <b>20</b>
        <span>שנות ניסיון</span>
      </div>
      <img className="logo" src={logo} alt={`${BIZ.name} — ${BIZ.tagline}`} />
      <div className="owner">
        {BIZ.owner} · {BIZ.tagline}
      </div>
      <div className="rule"></div>
      <h1>
        עשרים שנה של מקצועיות,
        <br />
        <em>ויחס שנשאר אישי גם היום.</em>
      </h1>
      <p className="sub">
        מעבדת מחשבים, תשתיות תקשורת, מצלמות אבטחה וחשמל חכם — בעל מקצוע אחד
        שמכיר את כל המערכת, מחדרה והסביבה.
      </p>
      <div className="badges">
        <span className="badge">חשמלאי</span>
        <span className="badge">20 שנות ניסיון</span>
        <span className="badge">לעסקים ולבית</span>
      </div>
      <div className="cta-row">
        <a className="cta cta--primary" href={telHref}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          חייגו עכשיו
        </a>
        <a className="cta" href={waHref} target="_blank" rel="noopener noreferrer">
          <IconWhatsapp fill="#25D366" />
          וואטסאפ
        </a>
      </div>
    </header>
  );
}
