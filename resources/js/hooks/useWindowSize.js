import { useEffect, useRef, useState } from "react"

export default function useWindowSize() {
  const tickingRef = useRef(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if(window) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const resizeCallback = function() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    }
  }, []);

  return windowSize
}