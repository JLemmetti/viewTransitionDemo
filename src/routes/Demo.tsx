import SlideWrapper from '@components/SlideWrapper';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Demo')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <div className="w-full outline-gray-700 flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-8xl mb-4">Demo</h1>
      </div>
    </SlideWrapper>
  );
}
