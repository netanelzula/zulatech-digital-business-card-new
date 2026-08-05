import { BIZ, telHref, mapsHref, wazeHref } from "../data/biz";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { useReveal } from "../hooks/useReveal";
import { IconWaze, IconMaps } from "./icons";

export default function InfoSection() {
  const { ref, visible } = useReveal();
  const { open, label } = useOpenStatus();

  return (
    <section ref={ref} className={`glass panel reveal${visible ? " in" : ""}`}>
      <div className="eyebrow">כתובת ושעות</div>

      <div className="info-row">
        <div className="info-label">
          <span className="k">כתובת</span>
          <svg viewBox="0 0 24 24">
            <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
        </div>
        <div className="v">{BIZ.address}</div>
        <div className="nav-links">
          <a className="mini" href={wazeHref} target="_blank" rel="noopener noreferrer">
            ניווט בוייז
            <IconWaze fill="#33CCFF" />
          </a>
          <a className="mini" href={mapsHref} target="_blank" rel="noopener noreferrer">
            פתיחה בגוגל מפות
            <IconMaps />
          </a>
        </div>
      </div>

      <div className="info-row">
        <div className="info-label">
          <span className="k">שעות פעילות</span>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5.2l3.2 2" />
          </svg>
        </div>
        <div className="hours">
          <div>
            <b>17:00–9:00</b>
            <span>ראשון–חמישי</span>
          </div>
          <div>
            <b>14:00–9:00</b>
            <span>שישי וערבי חג</span>
          </div>
          <div>
            <b>סגור</b>
            <span>שבת וחג</span>
          </div>
        </div>
        <div className={`status${open ? " open" : " closed"}`} role="status">
          <span>{label}</span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="info-row">
        <div className="info-label">
          <span className="k">טלפון</span>
          <svg viewBox="0 0 24 24">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
        </div>
        <a className="v" href={telHref} dir="ltr">
          {BIZ.phoneShow}
        </a>
      </div>
    </section>
  );
}
