const SERVICES = [
  {
    title: "מעבדת מחשבים",
    desc: "תיקון ומכירת מחשבים נייחים וניידים, שדרוגי חומרה, שחזור מידע, מכירת ציוד קצה ואביזרים.",
    icon: (
      <svg className="mark" viewBox="0 0 24 24">
        <rect x="2.5" y="4" width="19" height="12" rx="1.6" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    title: "פתרונות תקשורת",
    desc: "אינטרנט קווי, הקמת ארונות תקשורת, פריסת שקעי רשת, ציוד קצה ואיתור תקלות רשת.",
    icon: (
      <svg className="mark" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="1.6" />
        <path d="M7.5 7h9M7.5 11h9M7.5 15h5" />
      </svg>
    ),
  },
  {
    title: "מצלמות ואבטחה",
    desc: "מכירה והתקנה של מערכות אבטחה, מצלמות, אינטרקום, בקרות כניסה ואזעקות — לבית ולעסק.",
    icon: (
      <svg className="mark" viewBox="0 0 24 24">
        <path d="M3 8.5 15.5 4l1.6 4.3L4.6 12.8z" />
        <path d="M6 12v7h12v-6" />
        <circle cx="17.5" cy="16" r="2.2" />
      </svg>
    ),
  },
  {
    title: "חשמל ובית חכם",
    desc: "מפסקים ושקעים רגילים וחכמים, גופי תאורה, לוחות חשמל, איתור קצרים ותקלות.",
    icon: (
      <svg className="mark" viewBox="0 0 24 24">
        <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section>
      <div className="eyebrow" style={{ paddingInline: 6 }}>
        תחומי התמחות
      </div>
      <div className="services">
        {SERVICES.map((s) => (
          <article className="svc" key={s.title}>
            {s.icon}
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
