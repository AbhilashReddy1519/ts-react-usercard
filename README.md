# ts-react-usercard

A small learning project that demonstrates how to build a React application with TypeScript using Vite.

This project shows a simple UI that fetches random users from the public Random User API and renders a responsive user card component. It's intentionally kept small so you can focus on TypeScript fundamentals in a real React app: typed props, data models, async data fetching, and a minimal project structure.

## Goals

-   Teach the basics of TypeScript in a React environment.
-   Show how to type component props and data shapes (interfaces).
-   Demonstrate async data fetching with typed responses.
-   Provide a minimal Vite + React + TypeScript starter you can extend.

## What is TypeScript? (short primer)

TypeScript is a statically typed superset of JavaScript. It adds optional types, interfaces, and compile-time checks which help catch bugs earlier, improve IDE completions, and make code easier to maintain in larger projects. In this project TypeScript is used to define the shape of the data returned by the API and the props passed into React components.

Key benefits you will see here:

-   Type safety for props and API responses (interfaces in `src/util/userDataUtil.ts`).
-   Safer refactors since property names and types are checked by the compiler.
-   Better editor/IDE support (autocomplete, jump to definition, inline docs).

## Project structure

Root: `usercard/` (the actual app)

-   `index.html` — App entry HTML for Vite.
-   `package.json` — Scripts and dependencies.
-   `src/` — Application source files
    -   `main.tsx` — App bootstrap (React root).
    -   `App.tsx` — Top-level app layout.
    -   `App.css`, `index.css` — Minimal styles used by the app (color theme).
    -   `components/userCard.tsx` — The typed UserCard component (default export).
    -   `views/users.tsx` — Fetches data and maps over `UserCard` components.
    -   `data/userData.ts` — Typed async function `fetchData()` that calls Random User API.
    -   `util/userDataUtil.ts` — TypeScript interfaces: `User` and `UserData`.

You can inspect `src/util/userDataUtil.ts` to see how the `User` and `UserData` interfaces are defined and used across the app.

## Key files explained

-   `src/util/userDataUtil.ts`

    -   Exports two interfaces: `User` and `UserData` which describe the API data shape.

-   `src/data/userData.ts`

    -   Exports `fetchData(): Promise<UserData>` which fetches `https://randomuser.me/api/?results=12` and returns parsed JSON.
    -   Errors are logged and re-thrown so callers can handle failures.

-   `src/components/userCard.tsx`

    -   A presentational component that receives a single `User` via props: `({ results }: { results: User })`.
    -   Uses TypeScript props annotation to enforce the expected shape.
    -   Renders avatar, name, email, gender and location.

-   `src/views/users.tsx`
    -   Calls `fetchData()` inside a `useEffect` and stores result in `useState<UserData | null>`.
    -   Renders loading and error states and maps `data.results` to `UserCard`.

## Scripts (from `usercard/package.json`)

-   `npm run dev` — Start the Vite dev server with HMR.
-   `npm run build` — Runs `tsc -b` then `vite build` to build optimized production assets.
-   `npm run lint` — Runs ESLint for the project.
-   `npm run preview` — Preview the built app locally (Vite preview).

Example (PowerShell):

```powershell
cd usercard
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`) in your browser.

## How TypeScript is used here — small contract

Inputs/outputs

-   Input: API JSON from Random User API (expected shape declared in `UserData`).
-   Output: Rendered DOM (user cards) and console logs for data.

Error modes

-   Network error or bad HTTP status — `fetchData()` throws and `users.tsx` sets `data` to `null` and displays an error state.

Success criteria

-   App starts with `npm run dev`.
-   User cards are rendered when API returns data.

Edge cases covered

-   Null/failed data is handled and a message is shown.
-   Loading state while request is in-flight.

## Learning exercises (suggested)

1. Add TypeScript types for the API `info` object and update `UserData`.
2. Add a `key` prop when mapping `data.results.map(...)` so React list rendering is more efficient — currently the component does not pass a `key`.
3. Add unit tests for `fetchData()` using a test runner like Vitest and mock `fetch`.
4. Expand the `User` interface to include phone and dob fields and render them in `UserCard`.
5. Replace `any` or `object` with stronger types where present.

## Improvements & next steps

-   Add PropTypes or more advanced runtime validation if you expect unknown API shapes.
-   Add error UI with retry button.
-   Add paging, search or filters for the user list.
-   Add CSS modules or Tailwind utility classes consistently (the project already lists Tailwind in package.json but current styles are small).

## Resources to learn TypeScript with React

-   Official TypeScript Handbook — https://www.typescriptlang.org/docs/
-   React + TypeScript Cheatsheets — https://react-typescript-cheatsheet.netlify.app/
-   Vite + React docs — https://vitejs.dev/guide/
-   Random User API — https://randomuser.me/

## Notes from inspection

-   The project uses React 19, Vite and TypeScript 5.x as dev dependency. ESLint and React plugins are configured in the repo.
-   `src/App.css` appears to be imported by `userCard.tsx` and `App.tsx` but not present in the repository root `usercard/` folder; confirm your stylesheet paths and filenames if styles appear missing. (I was unable to read `App.css` when generating this README.)

## Completion

This README was generated by inspecting the repository source. If you'd like, I can also:

-   Add the suggested improvements as pull requests (for example: add `key` props, fix missing stylesheet, write tests).
-   Create a small CONTRIBUTING.md with run/test instructions.

Tell me which of the improvements you'd like me to implement next.

# ts-react-usercard

It is basic projects and how typescript can be used in web developing
