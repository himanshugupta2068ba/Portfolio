/**
 * Performance Monitoring Utility
 * 
 * Tracks and logs web vitals and performance metrics
 * Usage: Call trackPerformance() on app initialization
 */

/**
 * Track Core Web Vitals (CWV)
 * - Largest Contentful Paint (LCP)
 * - First Input Delay (FID)
 * - Cumulative Layout Shift (CLS)
 */
export const trackCoreWebVitals = () => {
  // For production monitoring, use web-vitals library
  // npm install web-vitals
  // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

  if ('web' in window && 'vitals' in window.web) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = window.web.vitals;
    
    getLCP((metric) => {
      console.log('LCP:', metric.value);
    });
    
    getFID((metric) => {
      console.log('FID:', metric.value);
    });
    
    getCLS((metric) => {
      console.log('CLS:', metric.value);
    });
  }
};

/**
 * Log page load performance metrics
 */
export const logPerformanceMetrics = () => {
  if (window.performance && window.performance.timing) {
    const perf = window.performance.timing;
    const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
    const connectTime = perf.responseEnd - perf.requestStart;
    const renderTime = perf.domComplete - perf.domLoading;
    const domContentLoaded = perf.domContentLoadedEventEnd - perf.navigationStart;

    console.log('=== Performance Metrics ===');
    console.log(`Page Load Time: ${pageLoadTime}ms`);
    console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
    console.log(`Connect Time: ${connectTime}ms`);
    console.log(`Render Time: ${renderTime}ms`);
    console.log('==========================');
  }
};

/**
 * Track image loading performance
 */
export const trackImagePerformance = () => {
  const images = document.querySelectorAll('img[data-track]');
  
  images.forEach((img) => {
    const startTime = performance.now();
    
    img.addEventListener('load', () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      console.log(`Image loaded: ${img.alt} (${loadTime.toFixed(2)}ms)`);
    });

    img.addEventListener('error', () => {
      console.error(`Failed to load image: ${img.src}`);
    });
  });
};

/**
 * Monitor bundle size (for dev purposes)
 */
export const getResourceMetrics = () => {
  const resources = performance.getEntriesByType('resource');
  const jsResources = resources.filter(r => r.name.includes('.js'));
  const cssResources = resources.filter(r => r.name.includes('.css'));
  const imageResources = resources.filter(r => r.initiatorType === 'img');

  const totalSize = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);

  console.log('=== Resource Metrics ===');
  console.log(`Total Resources: ${resources.length}`);
  console.log(`JS Files: ${jsResources.length}`);
  console.log(`CSS Files: ${cssResources.length}`);
  console.log(`Images: ${imageResources.length}`);
  console.log(`Total Transferred Size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log('========================');
};

/**
 * Initialize all performance tracking
 * Call this in your main.jsx or App.jsx
 */
export const initPerformanceTracking = () => {
  if (import.meta.env.DEV) {
    // Only in development
    window.addEventListener('load', () => {
      logPerformanceMetrics();
      getResourceMetrics();
    });
  }
};

export default {
  trackCoreWebVitals,
  logPerformanceMetrics,
  trackImagePerformance,
  getResourceMetrics,
  initPerformanceTracking,
};
