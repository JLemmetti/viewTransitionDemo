import SlideWrapper from '@components/SlideWrapper';
import { useSlideNavigation } from '@hooks/useSlideNavigation';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Start')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <div className="w-full outline-1 outline-gray-700 flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-5xl mb-4">
          Unlocking Native Animations
        </h1>
        <h2 className="text-center text-3xl">
          The View Transition API and React
        </h2>
      </div>
    </SlideWrapper>
  );
}
