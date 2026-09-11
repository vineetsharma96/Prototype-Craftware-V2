import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 800,
  distance = 28,
  className = '',
  direction = 'up',
  blur = true,
  blurAmount = 12,
  scale = true,
  triggerOnce = false
}) {
  const [ref, isVisible, scrollDirection] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
    triggerOnce
  });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    const scaleStr = scale ? ' scale(0.97)' : '';
    // Adjust subtle entrance offset based on scroll direction if moving
    const activeDistance = scrollDirection === 'up' ? -Math.abs(distance * 0.75) : distance;

    switch (direction) {
      case 'up': return `translate3d(0, ${activeDistance}px, 0)${scaleStr}`;
      case 'down': return `translate3d(0, -${activeDistance}px, 0)${scaleStr}`;
      case 'left': return `translate3d(${distance}px, 0, 0)${scaleStr}`;
      case 'right': return `translate3d(-${distance}px, 0, 0)${scaleStr}`;
      default: return `translate3d(0, ${activeDistance}px, 0)${scaleStr}`;
    }
  };

  return (
    <div
      ref={ref}
      className={`will-change-transform-opacity ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : (blur ? `blur(${blurAmount}px)` : 'none'),
        transform: getTransform(),
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;