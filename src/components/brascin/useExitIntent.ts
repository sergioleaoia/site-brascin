import { useEffect, useState } from "react";

const KEY = "brascin_exit_intent_shown";

export function useExitIntent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem(KEY, "1");
        setShow(true);
      }
    };
    const t = window.setTimeout(() => {
      document.addEventListener("mouseleave", onLeave);
    }, 8000);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return [show, setShow] as const;
}