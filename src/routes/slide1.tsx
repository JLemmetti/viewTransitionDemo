import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';

export const Route = createFileRoute('/slide1')({
  component: Slide1,
});

function Slide1() {
  useSlideNavigation();

  return (
    <div className="p-2">
      <h3>Slide 1</h3>
      <p>Welcome to the first slide!</p>
    </div>
  );
}
