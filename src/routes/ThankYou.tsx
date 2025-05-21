import { createFileRoute } from '@tanstack/react-router';
import SlideWrapper from '@components/SlideWrapper';
import SlideHeader from '@components/SlideHeader';
import { QRCodeSVG } from 'qrcode.react';
import { useSlideNavigation } from '@hooks/useSlideNavigation';

export const Route = createFileRoute('/ThankYou')({
  component: RouteComponent,
});

function RouteComponent() {
  useSlideNavigation();

  return (
    <SlideWrapper>
      <SlideHeader title="Thank You!" className="text-center" />

      <QRCodeSVG
        value="https://github.com/JLemmetti/viewTransitionDemo"
        size={400}
        className="mx-auto mt-10"
      />
      <p className="mt-10 text-center text-4xl">
        https://github.com/JLemmetti/viewTransitionDemo
      </p>
    </SlideWrapper>
  );
}
