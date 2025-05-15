import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';

export const Route = createFileRoute('/slide3')({
  component: Slide3,
});

function Slide3() {
  useSlideNavigation();

  return (
    <div className="p-2">
      <h3>Slide 3</h3>
      <p>Welcome to the third slide!</p>
    </div>
  );
}
