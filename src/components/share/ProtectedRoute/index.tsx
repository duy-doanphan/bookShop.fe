import { useAppSelector } from '@/redux/hook.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';
import NotPermitted from '@/components/share/NotPermision';

interface ILayoutProps {
  children: React.ReactNode;
}

const RoleBaseRoute = (props: ILayoutProps) => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const user = useAppSelector((state) => state.account.user);
  const userRole = user.role;

  if (isAdminRoute && userRole === 'ADMIN') {
    return <>{props.children}</>;
  } else {
    return <NotPermitted />;
  }
};

const ProtectedRoute = (props: ILayoutProps) => {
  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated,
  );

  return (
    <>
      {isAuthenticated ? (
        <>
          <RoleBaseRoute>{props.children}</RoleBaseRoute>
        </>
      ) : (
        <Navigate to='/login' replace />
      )}
    </>
  );
};
export default ProtectedRoute;
