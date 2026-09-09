import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) observer.unobserve(entry.target);
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, { threshold, rootMargin });

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [targetRef, isIntersecting];
}

export default useIntersectionObserver;