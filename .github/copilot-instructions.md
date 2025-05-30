# View Transition API Demo

This project demonstrates a slide deck created with React, showcasing the use of the View Transition API provided by modern browsers. The project highlights how this API can be integrated into a React-based application.

## Features

- Each slide has its own route.
- Slides can be navigated using arrow keys.
- The `README.md` file includes a general description of the project's technical aspects and purpose.

## Folder Structure

- Each component resides in its own folder for better organization and maintainability.
- `routeTree.gen.ts` is automatically created by TanStack Router. Do not touch it.

## Code Style

- Follow a functional programming style wherever possible.

## Styling

- Use **Tailwind CSS** for styling the application.

## Routing

- Implement routing using **TanStack Router**.
- When adding and removing slides, remember to update `slideRoutes` array in `src/hooks/useSlideNavigation.ts` hook.
- Add `useSlideNavigation` hook to new slides.

## React Components

- You don't need to import React in components.

## Additional Notes

- Ensure the project adheres to the above guidelines to maintain consistency and readability.
