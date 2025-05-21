import tamperejsLogo from '@assets/tamperejs.png';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export default function SlideWrapper({ children }: { children: ReactNode }) {
  // ! Fix slide transition navigating back to previous slide
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
              className="w-15 h-15 drop-shadow-xl hover:scale-105 transition-transform duration-300"
              style={{ viewTransitionName: 'tjsLogo' }}
            />
          </Link>
        </ViewTransition>
      </header>

      <main className="flex-grow items-start justify-start py-5 px-15 text-gray-200 min-h-0">
        {children}
      </main>

      <ViewTransition>
        <footer
          className="flex justify-between text-center p-2 text-gray-200 rounded-t-2xl"
          style={{ viewTransitionName: 'footer' }}
        >
          <p className="header-fancy text-2xl font-bold tracking-wide">Jurkka Lemmetti</p>
          <p className="header-fancy text-2xl font-bold tracking-wide">Cirit / 22.5.2025</p>
        </footer>
      </ViewTransition>
    </div>
  );
}
