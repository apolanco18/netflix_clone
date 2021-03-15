import React from 'react';
import {
  FAQsContainer,
  FooterContainer,
  JumbotronContainer,
  HeaderContainer,
} from '../../containers/Containers';
import { OptForm, Feature } from '../../components/Components';

const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimted Files, TV programs and more</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FAQsContainer />
    <FooterContainer />
  </>
);

export default Home;
