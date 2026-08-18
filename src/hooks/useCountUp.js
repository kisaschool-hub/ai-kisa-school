import { useEffect, useRef, useState } from 'react';

export function useCountUp(endValue, duration = 1200, shouldStart = true) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Parse end value (e.g., "200+" -> 200)
      const numValue = parseInt(endValue.toString().replace(/[^0-9]/g, ''));
      const currentCount = Math.floor(numValue * progress);

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [endValue, duration, shouldStart]);

  return count;
}
