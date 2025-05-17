import tamperejsLogo from '@assets/tamperejs.png';
import { createFileRoute } from '@tanstack/react-router';
import { unstable_ViewTransition as ViewTransition } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-25">
      <h1 className="text-6xl font-bold text-center">Welcome to TampereJS!</h1>

      <ViewTransition name="tjsLogo">
        <img
          src={tamperejsLogo}
          alt="TampereJS Logo"
          className="w-32 h-32"
          style={{ viewTransitionName: 'tjsLogo' }}
        />
      </ViewTransition>

      <p className="text-3xl text-center">Cirit / 22.5.2025</p>
    </div>
  );
}
