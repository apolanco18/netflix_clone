import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/OptFormStyles';

const OptForm = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

export default OptForm;

const OptFormInput = ({ ...restProps }) => <Input {...restProps} />;

OptForm.Input = OptFormInput;

const OptFormButton = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
);

OptForm.Button = OptFormButton;

const OptFormText = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

OptForm.Text = OptFormText;

const OptFormBreak = ({ ...restProps }) => <Break {...restProps} />;

OptForm.Break = OptFormBreak;
