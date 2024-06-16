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
            <Image src={props.image ?? defaultImg}></Image>
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


const TechItems = styled.p`
    display: flex;
    font-size:14px;
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
`

