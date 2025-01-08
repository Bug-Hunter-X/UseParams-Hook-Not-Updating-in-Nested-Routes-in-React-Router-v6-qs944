The solution involves using the `useLocation` hook to trigger a re-render and properly update the parameters.  Modify your `UserDetail` component as follows:

```jsx
import { useParams, useLocation } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  const location = useLocation();

  //The following line is the solution
  useEffect(() => {
    console.log('Location changed:', location);
  }, [location]);

  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserDetail;
```

By including this `useEffect` hook that depends on `location`, the component will re-render whenever the location changes, ensuring that `useParams` is always up-to-date.  Alternatively, you can restructure your route using `Outlet` for better route management.