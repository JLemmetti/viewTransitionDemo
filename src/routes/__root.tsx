import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-900 text-gray-50">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/slide1" className="[&.active]:font-bold">
          Slide 1
        </Link>{' '}
        <Link to="/slide2" className="[&.active]:font-bold">
          Slide 2
        </Link>{' '}
        <Link to="/slide3" className="[&.active]:font-bold">
          Slide 3
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
