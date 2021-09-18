<div align="center">
  <h1>Commentto</h1>
  <p>
    <a href="#getting-started">Getting Started</a>
     • <a href="#tech-stack">Tech stack</a>
  </p>
</div>


# Getting Started

First, install dependencies (preferably using Yarn 1.x), then run the development server:

``yarn dev or
npm run dev``

Open http://localhost:3000 with your browser to see the result.

# Tech stack
- React
- TypeScript
- Firebase
- Formik
- React Router
- Theme UI

### Useful yarn commands

- ``yarn start`` - starts the project
- ``yarn lint`` - lint the codebase
- ``yarn type-check`` - type check the codebase

### Generate components
It is highly recommended that you use the commands below when you need to create a new component, hook, or util function. 
These commands will create new files in the correct locations following the project's guidelines.

#### catch-all, will present options for the user to choose what type of component to create
yarn new

#### create a new `About` page component
yarn new:page about

#### create a new `isAllowed` util function
yarn new:util isAllowed

#### create a new `useToggle` React hook
yarn new:hook useToggle

