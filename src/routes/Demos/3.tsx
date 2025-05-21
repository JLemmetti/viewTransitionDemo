import { createFileRoute } from '@tanstack/react-router';
import {
  useState,
  useTransition,
  unstable_ViewTransition as ViewTransition,
} from 'react';

export const Route = createFileRoute('/Demos/3')({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [_transition, startTransition] = useTransition();

  const movies = [
    'Inception',
    'The Dark Knight',
    'Interstellar',
    'Dunkirk',
    'Tenet',
    'Memento',
    'The Prestige',
    'Batman Begins',
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full h-50 bg-gray-800 text-white flex items-center justify-center text-4xl font-bold mb-4">
        Imaginary Movie Rentals
      </div>
      {selectedMovie && (
        <div className="w-full bg-gray-800 text-white p-4 rounded">
          <h2 className="mb-6 text-6xl font-bold">{selectedMovie}</h2>

          <div className="flex justify-between">
            <div style={{ viewTransitionName: 'description' }}>
              <p className="mt-6 text-2xl">Directed by: Christopher Nolan</p>
              <p className="py-8 text-2xl">Details about {selectedMovie}...</p>
            </div>
            <ViewTransition name={`movie-${selectedMovie}`}>
              <div
                className="w-64 h-96 bg-blue-500 text-2xl text-white flex items-center justify-center cursor-pointer rounded"
                onClick={() =>
                  startTransition(() => {
                    setSelectedMovie(null);
                  })
                }
              >
                {selectedMovie}
              </div>
            </ViewTransition>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() =>
              startTransition(() => {
                setSelectedMovie(null);
              })
            }
          >
            Close
          </button>
        </div>
      )}
      <div className="flex space-x-4 overflow-x-auto">
        {!selectedMovie &&
          movies.map((movie) => (
            <ViewTransition
              name={`movie-${movie}`}
              default="slow-fade"
              key={movie}
            >
              <div
                className="w-32 h-48 bg-blue-500 text-white text-md flex items-center justify-center cursor-pointer rounded"
                onClick={() =>
                  startTransition(() => {
                    setSelectedMovie(movie);
                  })
                }
              >
                {movie}
              </div>
            </ViewTransition>
          ))}
      </div>
    </div>
  );
}
