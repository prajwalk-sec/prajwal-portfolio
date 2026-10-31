import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SWIPE_THRESHOLD = 56;
const SCROLL_EDGE_THRESHOLD = 48;

export default function useSectionNavigation({
  previousPath,
  nextPath,
  wheelNextAtTop = false,
  shouldReduceMotion = false,
}) {
  const navigate = useNavigate();
  const hasNavigated = useRef(true);
  const touchStart = useRef(null);

  useEffect(() => {
    const unlockTimer = window.setTimeout(() => {
      hasNavigated.current = false;
    }, 350);

    const navigateTo = (path, direction) => {
      if (!path || hasNavigated.current) return;
      hasNavigated.current = true;
      navigate(path, { state: { pageDirection: direction } });
    };

    const isAtTop = (scrollY = window.scrollY) => scrollY < 80;
    const isAtBottom = (scrollY = window.scrollY) =>
      scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - SCROLL_EDGE_THRESHOLD;

    const handleWheel = (event) => {
      if (hasNavigated.current || Math.abs(event.deltaY) <= 24) return;

      if (wheelNextAtTop) {
        if (
          event.deltaY > 24 &&
          isAtTop() &&
          window.matchMedia("(min-width: 1024px)").matches &&
          !shouldReduceMotion
        ) {
          navigateTo(nextPath, 1);
        }
        return;
      }

      if (event.deltaY < 0 && isAtTop()) {
        navigateTo(previousPath, -1);
      } else if (event.deltaY > 0 && isAtBottom()) {
        navigateTo(nextPath, 1);
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;

      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        target: event.target,
        scrollY: window.scrollY,
      };
    };

    const handleTouchEnd = (event) => {
      const start = touchStart.current;
      const touch = event.changedTouches[0];
      touchStart.current = null;

      if (!start || !touch || hasNavigated.current) return;
      if (
        start.target instanceof Element &&
        start.target.closest(
          "button, input, textarea, select, [role='button'], header a"
        )
      ) {
        return;
      }

      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      if (
        Math.abs(deltaY) < SWIPE_THRESHOLD ||
        Math.abs(deltaY) <= Math.abs(deltaX) * 1.2
      ) {
        return;
      }

      if (deltaY < 0 && isAtBottom(start.scrollY)) {
        navigateTo(nextPath, 1);
      } else if (deltaY > 0 && isAtTop(start.scrollY)) {
        navigateTo(previousPath, -1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.clearTimeout(unlockTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate, nextPath, previousPath, shouldReduceMotion, wheelNextAtTop]);
}
