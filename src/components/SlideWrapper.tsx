import tamperejsLogo from '@assets/tamperejs.png';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export default function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ viewTransitionName: 'slideUp' }}
      className="flex flex-col h-full"
    >
      <header className="flex items-center justify-start">
        <ViewTransition name="tjsLogo">
          <Link to="/">
            <img
              src={tamperejsLogo}
              alt="TampereJS Logo"
              className="w-18 h-18"
              style={{ viewTransitionName: 'tjsLogo' }}
            />
          </Link>
        </ViewTransition>
      </header>

      <main className="flex-grow items-start justify-start py-10 px-15">
        {children}
      </main>

      <ViewTransition name="footer">
        <footer
          className="flex justify-between text-center"
          style={{ viewTransitionName: 'footer' }}
        >
          <p className="text-3xl">Jurkka Lemmetti</p>
          <p className="text-3xl">Cirit / 22.5.2025</p>
        </footer>
      </ViewTransition>
    </div>
  );
}
