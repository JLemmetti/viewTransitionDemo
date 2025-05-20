import { createFileRoute, Link } from '@tanstack/react-router';
import { unstable_ViewTransition as ViewTransition } from 'react';
import tamperejsLogo from '@assets/tamperejs.png';

export const Route = createFileRoute('/Demos/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl mb-6">Demos</h1>
        <ViewTransition name="tjsLogo">
          <Link to="/ThankYou">
            <img
              src={tamperejsLogo}
              alt="TampereJS Logo"
              className="w-18 h-18"
              style={{ viewTransitionName: 'tjsLogo' }}
            />
          </Link>
        </ViewTransition>
      </div>

      <ul className="flex gap-4">
        <li>
          <ViewTransition>
            <Link
              className="bg-amber-700 px-4 py-2 rounded-full text-2xl hover:bg-amber-600"
              to="/Demos/1"
            >
              1
            </Link>
          </ViewTransition>
        </li>
        <li>
          <Link
            className="bg-amber-700 px-4 py-2 rounded-full text-2xl hover:bg-amber-600"
            to="/Demos/2"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            className="bg-amber-700 px-4 py-2 rounded-full text-2xl hover:bg-amber-600"
            to="/Demos/3"
          >
            3
          </Link>
        </li>
      </ul>
    </div>
  );
}
