import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { FaHome } from 'react-icons/fa';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-900 text-gray-50 h-screen flex flex-col">
      <nav className="p-2 flex gap-2">
        <Link to="/" className="flex items-center gap-1">
          <FaHome /> Home
        </Link>{' '}
        <Link to="/slide1">Presentation</Link>
      </nav>

      <hr />

      <div className="p-6 m-6 bg-gray-800 rounded-lg flex-grow">
        <Outlet />
      </div>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
