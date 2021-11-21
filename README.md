# React Router - V6

### Nested Routes

- Nest siblings route inside a parent route
- `<Outlet>` swaps between the two child routes
- Demo in `App.js && Info.js`

### useParams

- `useParams` Hook returns an object with a mapping between the URL parameter and its value.
- We can use `useParams` to create dynamic routes based on the “placeholder” portion of the URL.
- Demo in `App.js && Invoices.js && Invoice.js`

### Index Routes

- Index routes are the default child route for a parent route.
- Index routes render when the user hasn't clicked one of the items in a navigation list yet.
- Demo in `App.js`

### NavLink

- To see which link is active/clicked on a navigation list.
- NavLink component which is helpful in the event that we want to apply some special styles.
- Replace `Link` with `NavLink`
- Demo in `Invoices.jsx`

### No Match Found

- If there is no matched route/component we use `path="*"` in `<Route/>` to show error information.
- Demo in `App.js`

### Search Params

- `useSearchParams()` hook is used to read and write the URL query string.
- Demo in `Invoices.jsx`

### useNavigate

- Navigate pragmatically with `useNavigate()` hook.
- Go to the previous or next pages.
- Redirect to specific URL
- Demo in `Errors.jsx`
