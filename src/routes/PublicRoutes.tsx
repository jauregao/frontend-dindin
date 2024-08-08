import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface PublicRoutesProps {
  redirectTo: string;
}

function PublicRoutes({ redirectTo }: PublicRoutesProps) {
  const { handleGetToken } = useAuth();
  return !handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default PublicRoutes;
