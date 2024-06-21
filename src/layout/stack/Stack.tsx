import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/title/TitleSection";
import {SectionSubtitle} from "../../components/subtitle/SubtitleSection";
import {Icon} from "../../components/icon/Icon";
import {SubMenu} from "../../components/menu/SubMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const menuStack = ["Devops", "Frontend", "Backend", "B/S analyst"]
const iconStack = {
    "front": ["html", "css", "js", "react", "bootstrap"],
    "back": ["php", "mysql"]
}

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionSubtitle>Technologies I have worked with or know
                </SectionSubtitle>
                <SubMenu menuItem={menuStack}/>
                <BlockWithImageStack>
                    <Icon iconId={"html"} height={'120'} width={'120'} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"css"} height={'120'} width={'120'} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"php"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"linux"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"react"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"sc"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"js"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"docker"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"ansible"} height={'120'} width={'120'} viewBox={"0 0 32 32"}/>
                    <Icon iconId={"terraform"} height={'120'} width={'120'} viewBox={"0 0 16 16"}/>
                    <Icon iconId={"mysql"} height={'120'} width={'120'} viewBox={"0 0 24 24"}/>
                    <Icon iconId={"python"} height={'120'} width={'120'} viewBox={"0 0 20 20"}/>
                    <Icon iconId={"git"} height={'120'} width={'120'} viewBox={"0 0 20 20"}/>
                    <Icon iconId={"aws"} height={'120'} width={'120'} viewBox={"0 0 16 16 "}/>
                </BlockWithImageStack>
            </Container>
        </StyledStack>
    );
};

const BlockWithImageStack = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px
    
`

const StyledStack = styled.section`
    @media ${theme.media.center} {
        text-align: center;
    }
`