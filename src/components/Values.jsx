import ValueCard from "./ValueCard";

const VALUES = [
  {
    title: "ספק אחד לכל התשתית",
    desc: "מחשוב, רשת, מצלמות וחשמל — בלי להעביר אחריות בין בעלי מקצוע.",
  },
  {
    title: "עשרים שנה בשטח",
    desc: "טכנאי מחשבים וחשמלאי שראה כבר כמעט הכל, ויודע לזהות את הבעיה לפני שהיא מתפוצצת.",
  },
  {
    title: "שקיפות לפני שמתחילים",
    desc: "אבחון, הסבר בגובה העיניים והצעת מחיר ברורה — בלי הפתעות בסוף.",
  },
  {
    title: "מקומיים וזמינים",
    desc: "חדרה והסביבה. כשמשהו נופל בעסק, זמן התגובה הוא כל ההבדל.",
  },
];

export default function Values() {
  return (
    <section>
      <div className="eyebrow" style={{ paddingInline: 6 }}>
        למה דווקא כאן
      </div>
      <ul className="values">
        {VALUES.map((v, i) => (
          <ValueCard key={v.title} title={v.title} desc={v.desc} index={i} />
        ))}
      </ul>
    </section>
  );
}
