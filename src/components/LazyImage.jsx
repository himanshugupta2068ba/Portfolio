import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

/**
 * LazyImage Component - Optimized image loading with intersection observer
 * Features:
 * - Lazy loads images when they come into viewport
 * - Shows placeholder/skeleton while loading
 * - Prevents layout shift with aspect ratio
 * - Fallback for browsers without IntersectionObserver
 */
const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  width = '100%',
  height = '180px',
  aspectRatio = '16/9',
  sx = {},
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: load image immediately
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Image is in viewport, start loading
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoading(false);
              observer.unobserve(imageRef.current);
            };
            img.onerror = () => {
              setHasError(true);
              setIsLoading(false);
            };
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <Box
      ref={imageRef}
      component="img"
      src={imageSrc}
      alt={alt}
      onLoad={handleImageLoad}
      onError={handleImageError}
      sx={{
        width,
        height,
        aspectRatio,
        objectFit: 'cover',
        objectPosition: 'center',
        opacity: isLoading ? 0.7 : 1,
        transition: 'opacity 0.3s ease-in-out',
        filter: hasError ? 'grayscale(100%)' : 'none',
        ...sx,
      }}
      {...props}
    />
  );
};

export default LazyImage;
