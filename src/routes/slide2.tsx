import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';

export const Route = createFileRoute('/slide2')({
  component: Slide2,
});

function Slide2() {
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
      </div>
    </SlideWrapper>
  );
}
