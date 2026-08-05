import { BIZ, waHref, telHref, mapsHref, wazeHref } from "../data/biz";
import { IconTel, IconWhatsapp, IconFacebook, IconInstagram, IconMaps, IconWaze } from "./icons";

export default function QuickIcons() {
  return (
    <nav className="icons" aria-label="דרכי התקשרות וניווט">
      <a className="icon-btn" href={telHref} aria-label={`חיוג טלפוני ל־${BIZ.name}`}>
        <span className="tile t-phone" aria-hidden="true">
          <IconTel />
        </span>
        טלפון
      </a>
      <a
        className="icon-btn"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`שליחת הודעת וואטסאפ ל־${BIZ.name} — נפתח בלשונית חדשה`}
      >
        <span className="tile t-wa" aria-hidden="true">
          <IconWhatsapp />
        </span>
        וואטסאפ
      </a>
      <a
        className="icon-btn"
        href={BIZ.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`עמוד הפייסבוק של ${BIZ.name} — נפתח בלשונית חדשה`}
      >
        <span className="tile t-fb" aria-hidden="true">
          <IconFacebook />
        </span>
        פייסבוק
      </a>
      <a
        className="icon-btn"
        href={BIZ.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`עמוד האינסטגרם של ${BIZ.name} — נפתח בלשונית חדשה`}
      >
        <span className="tile t-ig" aria-hidden="true">
          <IconInstagram />
        </span>
        אינסטגרם
      </a>
      <a
        className="icon-btn"
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="פתיחת הכתובת בגוגל מפות — נפתח בלשונית חדשה"
      >
        <span className="tile t-maps" aria-hidden="true">
          <IconMaps />
        </span>
        גוגל מפות
      </a>
      <a
        className="icon-btn"
        href={wazeHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ניווט אלינו בוייז — נפתח בלשונית חדשה"
      >
        <span className="tile t-waze" aria-hidden="true">
          <IconWaze />
        </span>
        וייז
      </a>
    </nav>
  );
}
