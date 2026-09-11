import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function ImageReveal({
  src,
  alt,
  className = '',
  variant = 'scale-up',
  aspectRatio = 'aspect-4/3',
  triggerOnce = false,
  blur = true
}) {
  const [ref, isVisible, scrollDirection] = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce
  });

  const getContainerStyle = () => {
    if (variant === 'clip-inset') {
      return {
        clipPath: isVisible ? 'inset(0% 0% 0% 0% round 16px)' : 'inset(6% 6% 6% 6% round 20px)',
        transition: 'clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }
    return {};
  };

  const getImageStyle = () => {
    const base = {
      transition: 'transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 750ms ease-out, filter 850ms cubic-bezier(0.22, 1, 0.36, 1)',
    };

    if (!isVisible) {
      const yOffset = scrollDirection === 'up' ? -14 : 16;
      return {
        ...base,
        opacity: 0,
        filter: blur ? 'blur(16px)' : 'none',
        transform: variant === 'scale-up'
          ? `scale(1.08) translateY(${yOffset}px)`
          : `scale(1.04) translateY(${yOffset * 1.5}px)`,
      };
    }

    return {
      ...base,
      opacity: 1,
      filter: 'blur(0px)',
      transform: 'scale(1) translateY(0)',
    };
  };

  return (
    <div
      ref={ref}
      className={`overflow-hidden relative ${aspectRatio} ${className}`}
      style={getContainerStyle()}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform-opacity"
        style={getImageStyle()}
        loading="lazy"
      />
    </div>
  );
}

export default ImageReveal;