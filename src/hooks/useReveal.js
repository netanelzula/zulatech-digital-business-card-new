import { useEffect, useRef, useState } from "react";

/** Reveals once when the element scrolls into view. Optional delay in ms. */
export function useReveal(delayMs = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs) {
              el.style.transitionDelay = `${delayMs}ms`;
            }
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: delayMs ? 0.35 : 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return { ref, visible };
}
