import React from 'react';
import { Container, Inner, Item, InnerContainer, Title, SubTitle, Image } from './styles/Jumbotron'



const Jumbotron = ({ children, direction = 'row', ...restProps}) => {

    return(
        <Item>
            <Inner
                direction={direction}
            >
                {children}
            </Inner>
        </Item>
        
        
    )
}

export default Jumbotron

const JumbotronContainer = ({ children, ...restProps }) => {
    return(
        <Container
            {...restProps}
        >
            {children}
        </Container>
    )
}

Jumbotron.Container = JumbotronContainer;

const JumbotronInnerContainer = ({ children, ...restProps }) => {
    return(
        <InnerContainer
            {...restProps}
        >
            {children}
        </InnerContainer>
    )
}

Jumbotron.InnerContainer = JumbotronInnerContainer;

const JumbotronTitle = ({ children, ...restProps }) => {
    return(
        <Title
            {...restProps}
        >
            {children}
        </Title>
    )
}

Jumbotron.Title = JumbotronTitle;

const JumbotronSubTitle = ({ children, ...restProps }) => {
    return(
        <SubTitle
            {...restProps}
        >
            {children}
        </SubTitle>
    )
}

Jumbotron.SubTitle = JumbotronSubTitle;

const JumbotronImage = ({ ...restProps }) => {
    return(
        <Image {...restProps} />
    )
}

Jumbotron.Image = JumbotronImage;