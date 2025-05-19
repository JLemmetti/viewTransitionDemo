import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';

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
      <div className="p-2">
        <SlideHeader title="View Transitions" />

        <SlideList>
          <SlideListItem>First</SlideListItem>
          <SlideListItem>Second</SlideListItem>
          <SlideListItem>Third</SlideListItem>
        </SlideList>

        <pre className="outline-1 mt-5 p-4">
          <code>{css}</code>
        </pre>
      </div>
    </SlideWrapper>
  );
}
