import { useEffect, useRef } from "react";

type Mode = "pin" | "view";

// Tracks how far the user has scrolled through an element and writes it to the
// element's `--p` CSS variable (0 → 1), so animations run in CSS without re-rendering.
//   "pin":  0 when the element's top hits the viewport top, 1 when its bottom reaches the viewport bottom
//           (use on tall sections with a sticky child)
//   "view": 0 when the element enters from the bottom, 1 when it leaves off the top
export function useScrollProgress<T extends HTMLElement>(
  mode: Mode = "pin",
  onProgress?: (p: number) => void,
) {
  const ref = useRef<T>(null);
  const callback = useRef(onProgress);
  callback.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = mode === "pin"
        ? -rect.top / Math.max(1, rect.height - vh)
        : (vh - rect.top) / (vh + rect.height);
      const p = Math.min(1, Math.max(0, raw));
      if (!reduceMotion) el.style.setProperty("--p", p.toFixed(4));
      callback.current?.(p);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [mode]);

  return ref;
}
