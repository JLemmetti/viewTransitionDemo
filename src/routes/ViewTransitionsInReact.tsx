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
          <SlideListItem>
            React integration with the View Transition API
          </SlideListItem>
          <SlideListItem>Benefits of declarative animations</SlideListItem>
          <SlideListItem>Examples of seamless transitions</SlideListItem>
        </SlideList>
      </div>

      <CodeExample>{createRouterExample}</CodeExample>
    </SlideWrapper>
  );
}
