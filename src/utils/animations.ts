
/**
 * Animation utilities for Zero Waste Grocery
 */

/**
 * Applies a fade-in animation to elements when they enter the viewport
 */
export const setupScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Start animation when element is 10% visible
    threshold: 0.1,
    // Start animation when element is 100px from entering viewport
    rootMargin: '0px 0px -100px 0px'
  });

  // Select all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    observer.observe(element);
  });
};

/**
 * Apply staggered animation to child elements
 * @param selector - CSS selector for the parent element
 * @param childSelector - CSS selector for the children to animate
 * @param baseDelay - Base delay in ms before starting animations
 * @param staggerDelay - Delay between each staggered animation
 */
export const applyStaggeredAnimation = (
  selector: string,
  childSelector: string,
  baseDelay = 100,
  staggerDelay = 50
) => {
  const container = document.querySelector(selector);
  if (!container) return;

  const items = container.querySelectorAll(childSelector);
  items.forEach((item, index) => {
    const delay = baseDelay + (index * staggerDelay);
    (item as HTMLElement).style.animationDelay = `${delay}ms`;
    (item as HTMLElement).classList.add('animate-fade-in');
  });
};

/**
 * Page transition animation
 */
export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
};
