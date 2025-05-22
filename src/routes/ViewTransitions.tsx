import SlideHeader from '@components/SlideHeader';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import SlideWrapper from '@components/SlideWrapper';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ViewTransitions')({
  component: RouteComponent,
});

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
        <SlideListItem>Only works on asynchronous updates</SlideListItem>
        <SlideList>
          <SlideListItem>Route changes</SlideListItem>
          <SlideListItem>startTransition()</SlideListItem>
          <SlideListItem>useDeferredValue()</SlideListItem>
          <SlideListItem>&lt;Suspense&gt;</SlideListItem>
        </SlideList>
      </SlideList>
    </SlideWrapper>
  );
}
