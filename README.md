# React Router v6 useParams Issue in Nested Routes

This repository demonstrates a common issue with the `useParams` hook in React Router v6 when dealing with nested routes.  The problem occurs when navigating to a nested route from a parent route; the `useParams` hook doesn't update correctly, leading to undefined parameter values.

The `nestedRoutesBug.js` file shows the buggy implementation. The `nestedRoutesSolution.js` file demonstrates the solution using the `Outlet` component for better routing management.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Issue Description
The `useParams` hook, when used within nested routes, might not update its values properly if you navigate to the nested route from a parent route. This results in unexpected behavior, where the expected route parameters are not available to the component.

## Solution
The solution involves restructuring the routes to utilize the `Outlet` component provided by React Router v6.  This ensures that the route parameters are correctly passed and updated after a navigation event within the nested route structure.