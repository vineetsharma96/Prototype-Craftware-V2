import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function ImageReveal({
  src,
  alt,
  className = '',
  variant = 'scale-up',
  aspectRatio = 'aspect-4/3'
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const getContainerStyle = () => {
    if (variant === 'clip-inset') {
      return {
        clipPath: isVisible ? 'inset(0% 0% 0% 0% round 12px)' : 'inset(8% 8% 8% 8% round 16px)',
        transition: 'clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }
    return {};
  };

  const getImageStyle = () => {
    const base = {
      transition: 'transform 1000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease-out',
    };

    if (!isVisible) {
      return {
        ...base,
        opacity: 0,
        transform: variant === 'scale-up' ? 'scale(1.08) translateY(12px)' : 'scale(1.03) translateY(20px)',
      };
    }

    return {
      ...base,
      opacity: 1,
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