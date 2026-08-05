import { telHref, waHref } from "../data/biz";

export default function StickyBar() {
  return (
    <div className="sticky" aria-label="פעולות מהירות">
      <a className="cta cta--primary" href={telHref}>
        חייגו עכשיו
      </a>
      <a className="cta" href={waHref} target="_blank" rel="noopener noreferrer">
        וואטסאפ
      </a>
    </div>
  );
}
