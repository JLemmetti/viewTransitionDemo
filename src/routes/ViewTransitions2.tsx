import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import CodeExample from '@components/CodeExample';

export const Route = createFileRoute('/ViewTransitions2')({
  component: RouteComponent,
});

const css = `@view-transition {
  navigation: auto;
}
`;

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="View Transitions pt. 2" />
      <div className="flex">
        <div className="flex gap-x-6">
          <SlideList>
            <SlideListItem>Works on most browsers</SlideListItem>
            <SlideListItem>
              UI elements in different states can be connected with{' '}
              <strong>view-transition-name</strong>
            </SlideListItem>
            <SlideListItem>Trivial to add to multi-page apps</SlideListItem>
          </SlideList>
          <CodeExample className="w-3/5">{css}</CodeExample>
        </div>
      </div>
    </SlideWrapper>
  );
}
