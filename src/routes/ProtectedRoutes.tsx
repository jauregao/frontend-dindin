import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface ProtectedRoutesProps {
  redirectTo: string;
}

function ProtectedRoutes({ redirectTo }: ProtectedRoutesProps) {
  const { handleGetToken } = useAuth();
  //momentaneamente desprotegendo as rotas
  return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default ProtectedRoutes;
