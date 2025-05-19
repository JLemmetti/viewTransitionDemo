import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';

import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';

export const Route = createFileRoute('/TechStack')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <div className="p-2">
        <SlideHeader title="Tech Stack" />

        <SlideList>
          <SlideListItem>Vite</SlideListItem>
          <SlideListItem>TanStack Router</SlideListItem>
          <SlideListItem>React Experimental</SlideListItem>
        </SlideList>
      </div>
    </SlideWrapper>
  );
}
