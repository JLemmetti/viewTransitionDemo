import tamperejsLogo from '@assets/tamperejs.png';
import { createFileRoute } from '@tanstack/react-router';
import { unstable_ViewTransition as ViewTransition } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-25">
      <h1 className="text-6xl font-bold text-center">Welcome to TampereJS!</h1>

      <ViewTransition>
        <img
          src={tamperejsLogo}
          alt="TampereJS Logo"
          className="w-64 h-64"
          style={{ viewTransitionName: 'tjsLogo' }}
        />
      </ViewTransition>

      <ViewTransition>
        <footer
          className="flex justify-end text-center gap-10"
          style={{ viewTransitionName: 'footer' }}
        >
          <p className="text-3xl">Jurkka Lemmetti</p>
          <p className="text-3xl">Cirit / 22.5.2025</p>
        </footer>
      </ViewTransition>
    </div>
  );
}
