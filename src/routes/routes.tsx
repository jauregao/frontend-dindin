import { Route, Routes } from 'react-router-dom';

import PublicRoutes from './PublicRoutes.tsx';
import ProtectedRoutes from './ProtectedRoutes.tsx';

import HeaderLayout from '../layout/HeaderLayout/index.tsx';
import SignUpPage from '../pages/SignUp/SignUpPage.tsx';
import LoginPage from '../pages/SignIn/SignInPage.tsx';
import HomePage from '../pages/home/Home.tsx';

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoutes redirectTo="/" />}>
        <Route element={<HeaderLayout isLogged={false} />}>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes redirectTo="/sign-in" />}>
        <Route element={<HeaderLayout isLogged={true} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
