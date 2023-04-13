import React from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from './elements/user-block';
import LogIn from './elements/log-in';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="page-header film-card__head">
      <Logo />
      {(authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth)
        ? <LogIn/>
        : <UserBlock/>}
    </header>
  );
}
export default React.memo(Header);
