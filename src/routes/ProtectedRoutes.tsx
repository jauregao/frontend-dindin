import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface ProtectedRoutesProps {
  redirectTo: string;
}

function ProtectedRoutes({ redirectTo }: ProtectedRoutesProps) {
  const { handleGetToken } = useAuth();
  return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default ProtectedRoutes;
