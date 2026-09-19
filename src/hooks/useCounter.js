import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value from 0 to `end` once the returned ref
 * scrolls into view. Non-numeric displays should skip this and
 * render their own static text.
 */
export default function useCounter(end = 0, duration = 1200) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(end * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
}
