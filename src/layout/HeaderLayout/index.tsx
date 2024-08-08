import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

type Props = {
  isLogged: boolean;
}

function HeaderLayout({isLogged}: Props) {
  return (
    <div className="layout">
      <Header isLogged={ isLogged }/>
      <Outlet />
    </div>
  );
}

export default HeaderLayout;