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
            className="w-18 h-18"
            style={{ viewTransitionName: 'tjsLogo' }}
          />
        </ViewTransition>
      </header>

      <main className="flex-grow flex items-start justify-start py-10 px-15">
        {children}
      </main>

      <ViewTransition name="footer">
        <footer
          className="flex justify-end text-center"
          style={{ viewTransitionName: 'footer' }}
        >
          <p className="text-3xl">Cirit / 22.5.2025</p>
        </footer>
      </ViewTransition>
    </div>
  );
}
