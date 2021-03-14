/* eslint-disable no-shadow */
import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/AccordionStyles';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

export default Accordion;

const AccordionTitle = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Title = AccordionTitle;

const AccordionFrame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

Accordion.Frame = AccordionFrame;

const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Item = AccordionItem;

const AccordionHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Header = AccordionHeader;

const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.Body = AccordionBody;
