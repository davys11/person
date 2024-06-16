import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/title/TitleSection";
import {SectionSubtitle} from "../../components/subtitle/SubtitleSection";
import {Icon} from "../../components/icon/Icon";
import {SubMenu} from "../../components/menu/SubMenu";
import {Container} from "../../components/Container";

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
                </BlockWithImageStack>
            </Container>
        </StyledStack>
    );
};

const BlockWithImageStack = styled.div`
    
`

const StyledStack = styled.section`
`