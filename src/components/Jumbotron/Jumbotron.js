import React from 'react';
import {
  Container,
  Inner,
  Item,
  InnerContainer,
  Title,
  SubTitle,
  Image,
} from './styles/JumbotronStyles';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

export default Jumbotron;

const JumbotronContainer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Container = JumbotronContainer;

const JumbotronInnerContainer = ({ children, ...restProps }) => (
  <InnerContainer {...restProps}>{children}</InnerContainer>
);

Jumbotron.InnerContainer = JumbotronInnerContainer;

const JumbotronTitle = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.Title = JumbotronTitle;

const JumbotronSubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.SubTitle = JumbotronSubTitle;

const JumbotronImage = ({ ...restProps }) => <Image {...restProps} />;

Jumbotron.Image = JumbotronImage;
