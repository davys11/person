import React from 'react';
import styled from "styled-components";
import defaultImg from "../../../assets/images/project-default.png"
import {LinkProject} from "../link/LinkProject";
import {theme} from "../../../styles/Theme";

type ProjectPropsType = {
    image?: string,
    name: string,
    description?: string,
    stack?: Array<string>,
    link?: string,
    git?: string
}

export const ProjectItem = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <BlurImage>
                <Image src={props.image ?? defaultImg} />
                <Button>Подробнее</Button>
            </BlurImage>
            <ContantBlock>
                <NameProject>{props.name}</NameProject>
                <Description>{props.description ?? 'Description empty'}</Description>
                <Stack>
                    {props.stack && props.stack.length > 0 ? (
                        <>
                            <TechTitle>Tech stack: </TechTitle>
                            <TechItems>
                                {props.stack.map((item) => (
                                    <span>{item}</span>
                                ))}
                            </TechItems>
                        </>
                    ) : (
                        <span>Stack empty</span>
                    )}
                </Stack>
                <LinksBlock>
                    <LinkProject type={0} link='#'/>
                    <LinkProject type={1} link='#'/>
                </LinksBlock>
            </ContantBlock>
        </StyledProject>
    );
};

const Button = styled.button`
    width: 200px;
    height: 50px;
    cursor: pointer;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

const BlurImage = styled.div`
    position: relative;
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        background: -webkit-linear-gradient(0deg, ${theme.colors.startGrad} -2.06%, ${theme.colors.endGrad} 100%);
        border-radius: 15px;
    }
`


const TechItems = styled.p`
    display: flex;
    font-size: 14px;
    margin-left: 3px;

    & span:not(:last-child)::after {
        content: ",\\00a0";
    }
`

const TechTitle = styled.p`
    color: ${theme.colors.title};
    font-size: 14px;
    font-weight: bold;
`


const Stack = styled.p`
    display: flex;
    margin-bottom: 24px;
    font-size: 14px;
`

const Description = styled.p`
    margin-bottom: 12px;
`

const ContantBlock = styled.div`
    padding: 25px;
`


const LinksBlock = styled.div`
    display: flex;
    justify-content: space-between;
`


const NameProject = styled.h5`
    color: #000000;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 15px;

    &::first-letter {
        text-transform: uppercase;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const StyledProject = styled.div`
    border-radius: 20px;
    width: 375px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;

    &:hover {
        ${Button} {
            opacity: 1;
        }
        
        ${BlurImage}::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 5px;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
            border-radius: 20px 20px 0 0;
        }
    }
`

