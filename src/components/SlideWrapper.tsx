import tamperejsLogo from '@assets/tamperejs.png';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export default function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ viewTransitionName: 'slideUp' }}
      className="flex flex-col h-full rounded-3xl min-h-0 min-w-0"
    >
      <header className="flex items-center justify-start p-4">
        <ViewTransition>
          <Link to="/">
            <img
              src={tamperejsLogo}
              alt="TampereJS Logo"
              className="w-18 h-18 drop-shadow-xl hover:scale-105 transition-transform duration-300"
              style={{ viewTransitionName: 'tjsLogo' }}
            />
          </Link>
        </ViewTransition>
      </header>

      <main className="flex-grow items-start justify-start py-10 px-15 text-gray-200 min-h-0">
        {children}
      </main>

      <ViewTransition>
        <footer
          className="header-fancy flex justify-between text-center p-4 text-gray-200 rounded-t-2xl mt-auto"
          style={{ viewTransitionName: 'footer' }}
        >
          <p className="text-3xl font-bold tracking-wide">Jurkka Lemmetti</p>
          <p className="text-3xl font-bold tracking-wide">Cirit / 22.5.2025</p>
        </footer>
      </ViewTransition>
    </div>
  );
}
