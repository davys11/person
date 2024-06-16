import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/photo/me.webp'
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Main = () => {
    return (
        <StyleMainContainer>
            <Container>
                <FlexContainer>
                    <div>
                        <p>Hi 👋,</p>
                            <p>My name is</p>
                        <h2>Sergey Davydov</h2>
                        <h1>I`m a business analyst</h1>
                    </div>
                    <Photo src={photo}/>
                </FlexContainer>
            </Container>
        </StyleMainContainer>
    );
};

const StyleMainContainer = styled.section`
    `
const FlexContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 220px;
    margin-bottom: 200px;
    font-weight: bold;
    color: ${theme.colors.title};
    
    & * {
        font-size: ${theme.size.mainBlock};
    }
    
    h2 {
        background: -webkit-linear-gradient(0deg, #13B0F5 -2.06%, #E70FAA 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 9px solid transparent;
    background: linear-gradient(45deg, #E70FAA, #00C0FD) border-box;
    border-radius: 50%;
    -webkit-mask-composite: xor; /*5'*/
    mask-composite: exclude; /*5*/
`