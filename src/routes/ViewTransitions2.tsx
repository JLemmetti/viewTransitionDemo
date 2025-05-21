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
            <SlideListItem>Trivial to add to multi-page apps</SlideListItem>
            <SlideListItem>
              UI elements in different states needs to be connected by
              transition name
            </SlideListItem>
            <SlideList>
              <SlideListItem>
                With <strong>view-transition-name</strong> in CSS
              </SlideListItem>
              <SlideListItem>
                With <strong>name</strong> parameter in React
              </SlideListItem>
            </SlideList>
            <SlideListItem>
              You can mix-and-match with CSS and React transitions
            </SlideListItem>
          </SlideList>
          <CodeExample className="w-3/5">{css}</CodeExample>
        </div>
      </div>
    </SlideWrapper>
  );
}
