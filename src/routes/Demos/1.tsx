import { createFileRoute } from '@tanstack/react-router';
import {
  unstable_ViewTransition as ViewTransition,
  useState,
  useTransition,
} from 'react';

export const Route = createFileRoute('/Demos/1')({
  component: RouteComponent,
});

function RouteComponent() {
  const [_transition, startTransition] = useTransition();
  const [position, setPosition] = useState(0);

  const positions = [
    'translate(0, 0) rotate(0deg)',
    'translate(0, -50px) rotate(45deg)',
    'translate(-20px, 0) rotate(90deg)',
    'translate(0, -50px) rotate(-180deg)',
  ];

  return (
    <div className="relative flex flex-col items-center">
      <ViewTransition>
        <div
          style={{
            transform: positions[position],
            transition: 'transform 0.5s ease-in-out',
          }}
          className="absolute mt-50 ml-10 bg-amber-800 inline p-2 text-2xl rounded-lg text-gray-50 cursor-pointer"
          onClick={() =>
            startTransition(() =>
              setPosition((position + 1) % positions.length)
            )
          }
        >
          Animate me!
        </div>
      </ViewTransition>
    </div>
  );
}
