import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';

/**
 * Custom hook to navigate between slides using arrow keys and space bar.
 */
export function useSlideNavigation() {
  const router = useRouter();

  const slideRoutes = [
    '/Start',
    '/ViewTransitions',
    '/ViewTransitions2',
    '/ViewTransitionsInReact',
    '/ViewTransitionsInReact2',
    '/Demo',
    '/Hurdles',
    '/Links',
    '/ThankYou',
  ]; // Define slide routes in order

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentPath = router.state.location.pathname;
      const currentIndex = slideRoutes.indexOf(currentPath);

      // Slide navigation
      if (
        event.key === 'ArrowRight' ||
        event.key === 'ArrowDown' ||
        event.key === ' '
      ) {
        const nextIndex = (currentIndex + 1) % slideRoutes.length; // Wrap around to the first slide
        router.navigate({ to: slideRoutes[nextIndex] });
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        const prevIndex =
          (currentIndex - 1 + slideRoutes.length) % slideRoutes.length; // Wrap around to the last slide
        router.navigate({ to: slideRoutes[prevIndex] });
      } else if (event.key === 'f' || event.key === 'F') {
        // Toggle fullscreen mode
        const doc = document.documentElement;
        if (!document.fullscreenElement) {
          doc.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router, slideRoutes]);
}
