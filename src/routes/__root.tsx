import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '@components/Navigation';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-900 text-gray-50 h-screen flex flex-col">
      <Navigation />

      <hr />

      <div className="p-6 m-6 bg-gray-800 rounded-lg flex-grow">
        <Outlet />
      </div>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
