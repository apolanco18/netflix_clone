import React from 'react';
import {
  FAQsContainer,
  FooterContainer,
  JumbotronContainer,
  HeaderContainer,
} from '../../containers/Containers';
import { OptForm } from '../../components/Components';

const Home = () => (
  <>
    <HeaderContainer>
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </HeaderContainer>
    <JumbotronContainer />
    <FAQsContainer />
    <FooterContainer />
  </>
);

export default Home;
