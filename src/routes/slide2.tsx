import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';

export const Route = createFileRoute('/slide2')({
  component: Slide2,
});

function Slide2() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <div className="p-2">
        <SlideHeader title="Slide 2" />
        <p>Welcome to the second slide!</p>
      </div>
    </SlideWrapper>
  );
}
