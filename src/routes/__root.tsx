import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { FaHome } from 'react-icons/fa';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-900 text-gray-50">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold flex items-center gap-1">
          <FaHome /> Home
        </Link>{' '}
        <Link to="/slide1" className="[&.active]:font-bold">
          Presentation
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
