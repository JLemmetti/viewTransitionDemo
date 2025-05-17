import tamperejsLogo from '@assets/tamperejs.png';
import type { ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export default function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ viewTransitionName: 'slideUp' }}
      className="slide-wrapper flex flex-col h-full"
    >
      <header className="flex items-center justify-start">
        <ViewTransition name="tjsLogo">
          <img
            src={tamperejsLogo}
            alt="TampereJS Logo"
            className="w-22 h-22"
            style={{ viewTransitionName: 'tjsLogo' }}
          />
        </ViewTransition>
      </header>

      <main className="flex-grow flex items-start justify-start py-10 px-15">
        {children}
      </main>

      <footer className="flex justify-end text-center">
        <p className="text-3xl">Cirit / 22.5.2025</p>
      </footer>
    </div>
  );
}
