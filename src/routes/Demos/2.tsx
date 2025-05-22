import { createFileRoute } from '@tanstack/react-router';
import {
  useState,
  useTransition,
  unstable_ViewTransition as ViewTransition,
} from 'react';

export const Route = createFileRoute('/Demos/2')({
  component: RouteComponent,
});

function RouteComponent() {
  const [_transition, startTransition] = useTransition();
  const [boxes, setBoxes] = useState([0, 1, 2, 3]);
  const [nextId, setNextId] = useState(4);

  const addBox = () => {
    setBoxes((prev) => [...prev, nextId]);
    setNextId((prev) => prev + 1);
  };

  const removeBox = (index: number) => {
    setBoxes((prev) => prev.filter((_, i) => i !== index));
  };


  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="mt-8 px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
        onClick={() =>
          startTransition(() => { //! <--
            addBox();
          })
        }
      >
        Add Box
      </button>
      <div className="flex space-x-4 space-y-4 flex-wrap">
        {boxes.map((box) => (
          <ViewTransition key={box}>
            <div
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded-2xl cursor-pointer"
              onClick={() =>
                startTransition(() => {
                  removeBox(boxes.indexOf(box));
                })
              }
            >
              Box {box + 1}
            </div>
          </ViewTransition>
        ))}
      </div>

    </div>
  );
}
