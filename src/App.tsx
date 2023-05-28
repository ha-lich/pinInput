import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '@components/PrivateRoute';
import PublicRoute from '@components/PublicRoute';
import { routeConfig } from '@routes/routes';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        {routeConfig.map(route => (
          <Route
            key={route.id}
            path={route.path}
            element={
              route.isProtected ? (
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              ) : (
                <PublicRoute>
                  <route.component />
                </PublicRoute>
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
