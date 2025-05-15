import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '../hooks/useSlideNavigation';

export const Route = createFileRoute('/slide2')({
  component: Slide2,
});

function Slide2() {
  useSlideNavigation();

  return (
    <div className="p-2">
      <h3>Slide 2</h3>
      <p>Welcome to the second slide!</p>
    </div>
  );
}
