import { createFileRoute } from '@tanstack/react-router';
import SlideWrapper from '@components/SlideWrapper';
import SlideHeader from '@components/SlideHeader';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';

export const Route = createFileRoute('/Hurdles')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="Hurdles" />
      <SlideList>
        <SlideListItem>NPM issues with experimental React</SlideListItem>
        <SlideListItem>All transitions on page trigger at once</SlideListItem>
        <SlideListItem>
          You can't always configure everything on React side
        </SlideListItem>
      </SlideList>
    </SlideWrapper>
  );
}
