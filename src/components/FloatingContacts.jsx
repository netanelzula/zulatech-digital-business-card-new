import { waHref, telHref, BIZ } from "../data/biz";
import { IconWhatsapp, IconTel } from "./icons";

export default function FloatingContacts() {
  return (
    <div className="float-stack" aria-label="יצירת קשר מהירה">
      <a
        className="float-btn fb-wa"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`שליחת הודעת וואטסאפ ל־${BIZ.name} — נפתח בלשונית חדשה`}
      >
        <IconWhatsapp />
      </a>
      <a className="float-btn fb-phone" href={telHref} aria-label={`חיוג טלפוני ל־${BIZ.name}`}>
        <IconTel />
      </a>
    </div>
  );
}
