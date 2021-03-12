import React from 'react';
import jumboData from '../../fixtures/jumbo';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

const JumbotronContainer = () => (
  <Jumbotron.Container>
    {jumboData.map((item) => (
      <Jumbotron key={item.id} direction={item.direction}>
        <Jumbotron.InnerContainer>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.InnerContainer>
        <Jumbotron.InnerContainer>
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron.InnerContainer>
      </Jumbotron>
    ))}
  </Jumbotron.Container>
);

export default JumbotronContainer;
