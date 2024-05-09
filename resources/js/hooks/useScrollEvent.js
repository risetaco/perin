import { useEffect, useRef, useState } from "react"

export default function useScrollEvent() {
  const tickingRef = useRef(false);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollCallback = function(e) {
    setScrollAmount(window.scrollY);
      
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }

  useEffect(() => {
    window.document.addEventListener('scroll', scrollCallback);
    return () => {
      window.document.removeEventListener('scroll', scrollCallback);
    }
  }, []);

  return { scrollAmount };
};
