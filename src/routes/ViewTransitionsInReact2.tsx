import { createFileRoute } from '@tanstack/react-router';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import SlideHeader from '@components/SlideHeader';
import SlideWrapper from '@components/SlideWrapper';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import CodeExample from '@components/CodeExample';

export const Route = createFileRoute('/ViewTransitionsInReact2')({
  component: RouteComponent,
});

const componentExample = `import { unstable_ViewTransition as ViewTransition } from 'react';`;

const createRouterExample = `<ViewTransition>
  <img
    src={tamperejsLogo}
    alt="TampereJS Logo"
    className="w-18 h-18"
    style={{ viewTransitionName: 'tjsLogo' }}
  />
</ViewTransition>`;

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="View Transitions in React pt. 2" />

      <div className="flex">
        <SlideList>
          <SlideListItem>ViewTransition component</SlideListItem>
          <CodeExample>{componentExample}</CodeExample>
          <SlideListItem>Item on a page to animate</SlideListItem>
          <CodeExample>{createRouterExample}</CodeExample>
        </SlideList>
      </div>
    </SlideWrapper>
  );
}
