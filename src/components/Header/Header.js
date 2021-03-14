import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, ButtonLink, Container, Logo } from './styles/HeaderStyles';

const Header = ({ bg = true, children, ...restProps }) =>
  bg ? <Background {...restProps}>{children}</Background> : children;

export default Header;

const HeaderFrame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Frame = HeaderFrame;

const HeaderLogo = ({ to, ...restProps }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);

Header.Logo = HeaderLogo;

const HeaderButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.ButtonLink = HeaderButtonLink;
