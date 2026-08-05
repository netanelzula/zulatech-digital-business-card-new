import { useMemo } from "react";

export function useOpenStatus() {
  return useMemo(() => {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jerusalem",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date());
    const g = (t) => parts.find((p) => p.type === t).value;
    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const d = dayMap[g("weekday")];
    const mins = Number(g("hour")) * 60 + Number(g("minute"));

    let open = false;
    let until = "";
    if (d <= 4) {
      open = mins >= 540 && mins < 1020;
      until = "17:00";
    } else if (d === 5) {
      open = mins >= 540 && mins < 840;
      until = "14:00";
    }

    return {
      open,
      label: open
        ? `פתוח עכשיו · עד ${until}`
        : "סגור כרגע · אפשר להשאיר הודעה בוואטסאפ",
    };
  }, []);
}
