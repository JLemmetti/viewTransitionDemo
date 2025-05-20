import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import CodeExample from '@components/CodeExample';

export const Route = createFileRoute('/ViewTransitions')({
  component: RouteComponent,
});

const css = `::view-transition-new(slideUp) {
  animation: slide-in 0.5s ease-in-out;
  }
::view-transition-old(slideUp) {
  animation: slide-out 0.5s ease-in-out;
}`;

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="View Transitions" />

      <SlideList>
        <SlideListItem>
          Native browser API for smooth transitions between UI states
        </SlideListItem>
        <SlideListItem>
          Works for both single-page apps and multi-page apps
        </SlideListItem>
        <SlideListItem>Rendering is paused during transitions</SlideListItem>
      </SlideList>

      {/* <div className="w-1/2">
          <CodeExample>{css}</CodeExample>
        </div> */}
    </SlideWrapper>
  );
}
