import { createFileRoute } from '@tanstack/react-router';
import SlideWrapper from '@components/SlideWrapper';
import SlideHeader from '@components/SlideHeader';
import SlideList from '@components/SlideList';
import SlideListItem from '@components/SlideListItem';
import { useSlideNavigation } from '@hooks/useSlideNavigation';

export const Route = createFileRoute('/Links')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="Links" />
      <SlideList>
        <SlideListItem>
          <a
            href="https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            React Labs: View Transitions, Activity, and more
          </a>
          <SlideList>
            <SlideListItem>
              The blog post that inspired this presentation
            </SlideListItem>
          </SlideList>
        </SlideListItem>

        <SlideListItem>
          <a
            href="https://react.dev/reference/react/ViewTransition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            React Documentation: &lt;ViewTransition&gt;
          </a>
          <SlideList>
            <SlideListItem>
              A comprehensive guide to the View Transition API in React
            </SlideListItem>
          </SlideList>
        </SlideListItem>

        <SlideListItem>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            MDN: Using the View Transition API
          </a>
          <SlideList>
            <SlideListItem>
              Lengthy post about the View Transition API
            </SlideListItem>
          </SlideList>
        </SlideListItem>

        <SlideListItem>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            MDN: View Transition API
          </a>
          <SlideList>
            <SlideListItem>The API documentation</SlideListItem>
          </SlideList>
        </SlideListItem>
      </SlideList>
    </SlideWrapper>
  );
}
