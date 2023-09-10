import { useAppSelector } from '@/redux/hook.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const ProtectedRoute = (props: ILayoutProps) => {
  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated,
  );
  console.log(isAuthenticated);

  return (
    <>{isAuthenticated ? props.children : <Navigate to='/login' replace />}</>
  );
};
export default ProtectedRoute;
