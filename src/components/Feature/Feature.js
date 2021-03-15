import React from 'react';
import { Container, Title, SubTitle } from './styles/FeatureStyles';

const Feature = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default Feature;

const FeatureTitle = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Feature.Title = FeatureTitle;

const FeatureSubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Feature.SubTitle = FeatureSubTitle;
