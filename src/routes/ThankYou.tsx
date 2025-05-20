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
      <SlideHeader title="Thank You!" />
      <div className="text-center mt-10 text-xl">
        <p>Thank you for viewing this presentation.</p>
        <p>Feel free to reach out for any questions or feedback!</p>
      </div>

      <QRCodeSVG
        value="https://github.com/JLemmetti/viewTransitionDemo"
        size={300}
        className="mx-auto mt-10"
      />
      <p className="mt-10 text-center text-2xl">
        https://github.com/JLemmetti/viewTransitionDemo
      </p>
    </SlideWrapper>
  );
}
