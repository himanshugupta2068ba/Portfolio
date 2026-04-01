/**
 * Image Optimization Utilities
 * 
 * Usage:
 * - convertImages() - Converts all images to WebP format with fallback
 * - compressImage() - Compresses image file size
 * - getOptimizedImagePath() - Gets the correct image path
 */

/**
 * Get optimized image path with public prefix
 * @param {string} imageName - Name of the image file
 * @returns {string} - Full path to the image
 */
export const getOptimizedImagePath = (imageName) => {
  return `/${imageName}`;
};

/**
 * Preload images for better performance
 * Useful for images that are critical above the fold
 * @param {string[]} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  imagePaths.forEach((path) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Generate responsive image srcset
 * @param {string} basePath - Base path without extension
 * @param {string} format - Image format (webp, jpg, png)
 * @returns {string} - srcset string for responsive images
 */
export const generateSrcSet = (basePath, format = 'webp') => {
  return `
    ${basePath}-small.${format} 480w,
    ${basePath}-medium.${format} 768w,
    ${basePath}-large.${format} 1200w
  `;
};

/**
 * Check if WebP is supported
 * @returns {boolean} - True if WebP is supported
 */
export const isWebPSupported = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
};

/**
 * Get image CDN URL with optimization parameters
 * Useful if using a CDN like Cloudinary or Imgix
 * @param {string} imagePath - Path to image
 * @param {object} options - Optimization options { width, height, quality, format }
 * @returns {string} - CDN URL with optimization params
 */
export const getCDNOptimizedImage = (imagePath, options = {}) => {
  const {
    width = 'auto',
    height = 'auto',
    quality = 'auto',
    format = 'auto',
  } = options;

  // Example for Cloudinary - adjust based on your CDN
  // return `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/fetch/w_${width},h_${height},q_${quality},f_${format}/${imagePath}`;
  
  return imagePath;
};

export default {
  getOptimizedImagePath,
  preloadImages,
  generateSrcSet,
  isWebPSupported,
  getCDNOptimizedImage,
};
