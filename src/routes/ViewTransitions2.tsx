import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';

export const Route = createFileRoute('/ViewTransitions2')({
  component: RouteComponent,
});

const css = `::view-transition-new(slideDown) {
  animation: slide-in-reverse 0.5s ease-in-out;
  }
::view-transition-old(slideDown) {
  animation: slide-out-reverse 0.5s ease-in-out;
}`;

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="View Transitions pt. 2" />
      <div className="flex">
        <SlideList>
          <SlideListItem>
            Reverse transitions for backward navigation
          </SlideListItem>
          <SlideListItem>
            Customize animations for different transition directions
          </SlideListItem>
          <SlideListItem>
            Enhance user experience with smooth animations
          </SlideListItem>
        </SlideList>

        <pre className="mt-5 p-4 bg-gray-900 rounded-lg">
          <code>{css}</code>
        </pre>
      </div>
    </SlideWrapper>
  );
}
