import portrait from "../assets/portrait.jpg";
import { BIZ } from "../data/biz";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className={`glass panel reveal${visible ? " in" : ""}`}>
      <div className="eyebrow">מי עומד מאחורי</div>
      <div className="about-head">
        <img className="portrait" src={portrait} alt={`${BIZ.owner}, בעל העסק`} />
        <div className="who">
          <strong>{BIZ.owner}</strong>
          <span>בעל העסק · טכנאי מחשבים וחשמלאי</span>
        </div>
      </div>
      <p>
        אין כאן מוקד ואין תורים. אתם מדברים עם בעל המקצוע שמגיע אליכם, מאבחן
        ולוקח אחריות על התוצאה — מהלפטופ שנתקע ועד ארון תקשורת שלם, מערכת
        מצלמות או לוח חשמל.
      </p>
      <p>
        עשרים שנות ניסיון בשטח, בבתים ובעסקים בחדרה והסביבה. השילוב של מחשוב,
        תקשורת, מתח נמוך וחשמל תחת ידיים אחת הוא בדיוק מה שחוסך לכם את
        הפינג־פונג בין ספקים.
      </p>
    </section>
  );
}
