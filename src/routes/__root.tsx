import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '@components/Navigation';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-800 h-screen flex flex-col">
      <Navigation />

      <div className="p-6 m-6 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 rounded-lg flex-grow">
        <Outlet />
      </div>

      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  ),
});
