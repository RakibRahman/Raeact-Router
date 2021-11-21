# React Router - V6

### Nested Routes

- Nest siblings route inside a parent route
- `<Outlet>` swaps between the two child routes
- Demo in `App.js && Info.js`

### Index Routes

- Index routes are the default child route for a parent route.
- Index routes render when the user hasn't clicked one of the items in a navigation list yet.
- Demo in `App.js`

### ActiveLink

- To see which link is active/clicked on a navigation list.
- Replace `Link` with `ActiveLink`
- Demo in `Invoices.jsx`

### No Match Found

- If there is no matched route/component we use `path="*"` in `<Route/>` to show error.
- Demo in `App.js`
