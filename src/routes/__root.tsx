import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '@components/Navigation';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 min-h-screen flex flex-col">
      <Navigation />

      <div className="p-8 m-8 bg-white/5 rounded-3xl shadow-2xl flex-grow">
        <Outlet />
      </div>

      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  ),
});
