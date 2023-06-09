import { Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@apps/hooks';
import AppLayout from './layout/AppLayout';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { access_token } = useAppSelector(state => state.auth);
  if (!access_token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <AppLayout>
      <Suspense fallback={null}>{children}</Suspense>
    </AppLayout>
  );
}

export default PrivateRoute;
