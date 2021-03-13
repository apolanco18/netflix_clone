import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/FooterStyles';

const Footer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default Footer;

const FooterRow = ({ children, ...restProps }) => (
  <Row {...restProps}>{children} </Row>
);

Footer.Row = FooterRow;

const FooterColumn = ({ children, ...restProps }) => (
  <Column {...restProps}>{children} </Column>
);

Footer.Column = FooterColumn;

const FooterLink = ({ children, ...restProps }) => (
  <Link {...restProps}>{children} </Link>
);

Footer.Link = FooterLink;

const FooterTitle = ({ children, ...restProps }) => (
  <Title {...restProps}>{children} </Title>
);

Footer.Title = FooterTitle;

const FooterText = ({ children, ...restProps }) => (
  <Text {...restProps}>{children} </Text>
);

Footer.Text = FooterText;

const FooterBreak = ({ children, ...restProps }) => (
  <Break {...restProps}>{children}</Break>
);

Footer.Break = FooterBreak;
