import { createFileRoute } from '@tanstack/react-router';
import {
  unstable_ViewTransition as ViewTransition,
  useState,
  useTransition,
} from 'react';

export const Route = createFileRoute('/Demos')({
  component: RouteComponent,
});

const positions = [
  'translate(0, 0) rotate(0deg)',
  'translate(0, -10px) rotate(45deg)',
  'translate(-20px, 0) rotate(90deg)',
  'translate(0, -40px) rotate(180deg)',
];

function RouteComponent() {
  const [_transition, startTransition] = useTransition();
  const [position, setPosition] = useState(0);

  return (
    <ViewTransition>
      <div
        style={{
          transform: positions[position],
          viewTransitionName: 'box',
        }}
        className="mt-10 ml-10 bg-amber-800 inline p-2 rounded-lg text-gray-50 cursor-pointer"
        onClick={() =>
          startTransition(() => setPosition((position + 1) % positions.length))
        }
      >
        Animate me!
      </div>
    </ViewTransition>
  );
}
