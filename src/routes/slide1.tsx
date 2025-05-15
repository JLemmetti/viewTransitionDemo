import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';

export const Route = createFileRoute('/slide1')({
  component: Slide1,
});

function Slide1() {
  useSlideNavigation();

  return (
    <div className="p-2">
      <SlideHeader title="Slide 1" />
      <p>Welcome to the first slide!</p>
    </div>
  );
}
