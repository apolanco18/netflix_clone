import React from 'react';
import { Header } from '../../components/Components';
import * as ROUTES from '../../constants/Routes/Routes';
import logo from '../../logo.svg';

const HeaderContainer = ({ children }) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
      <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
);

export default HeaderContainer;
