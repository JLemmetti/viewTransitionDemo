import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';

export const Route = createFileRoute('/slide3')({
  component: Slide3,
});

function Slide3() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <div className="p-2">
        <SlideHeader title="Slide 3" />
        <p>Welcome to the third slide!</p>
      </div>
    </SlideWrapper>
  );
}
