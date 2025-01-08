In React Router Dom v6, a common issue arises when working with nested routes and the `useParams` hook.  If you have a nested route structure like this:

```jsx
<Routes>
  <Route path="/users" element={<Users />}>
    <Route path=":userId" element={<UserDetail />} />
  </Route>
</Routes>
```

And in `UserDetail`, you try to access the `userId` parameter like this:

```jsx
const { userId } = useParams();
console.log(userId);
```

It might work correctly if you navigate directly to `/users/:userId`. However, if you navigate to `/users` first and *then* click a link to a specific user, `userId` might be undefined within `UserDetail`. This is because `useParams` only updates when the URL changes at the top level.  If the URL changes within the nested route, it won't trigger a re-render and update `useParams`.