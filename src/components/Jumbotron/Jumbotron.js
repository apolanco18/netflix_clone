import React from 'react';
import styled from 'styled-components'

const Inner = styled.div`
    display: flex;
    align-items:center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin:auto;
    width:100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Jumbotron = ({ children, direction = 'row', ...restProps}) => {

    return(
        <Inner
            direction={direction}
        >
            <p>Hello Man</p>
        </Inner>
        
    )
}

export default Jumbotron