import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import CodeExample from '@components/CodeExample';

export const Route = createFileRoute('/ViewTransitionsInReact')({
  component: RouteComponent,
});

const react19Example = `npm i react@experimental react-dom@experimental`;

const createRouterExample = `const router = createRouter({
  routeTree,
  defaultViewTransition: true,
});`;

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="View Transitions in React" />

      <div className="flex">
        <SlideList>
          <SlideListItem>React 19 experimental</SlideListItem>
          <CodeExample>{react19Example}</CodeExample>
          <SlideListItem>A router</SlideListItem>
          <CodeExample>{createRouterExample}</CodeExample>
        </SlideList>
      </div>
    </SlideWrapper>
  );
}
