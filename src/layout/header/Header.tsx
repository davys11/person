import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/menu/MobileMenu";

export const menuItem = ["Home", "About", "Stack", "Project", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer>
                <LogoWrapper>
                    <Logo/>
                </LogoWrapper>
                <Menu menuItem={menuItem}/>
                <MobileMenu menuItem={menuItem} />
                <IconHeader>
                    <Icon iconId={"telegram"} width={'30'} height={'30'} viewBox={"0 0 50 50"}/>
                    <Icon iconId={"instagram"} viewBox={"0 0 50 50"} width={'30'} height={"30"}/>
                    <Icon iconId={"github"} viewBox={"0 0 50 50"} width={'30'} height={"30"}/>
                </IconHeader>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const LogoWrapper = styled.div`
    display: flex;
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeader = styled.header`
    padding-top: 20px;
`;

const IconHeader = styled.header`
    display: flex;
    gap: 20px;
    @media ${theme.media.tablet} {
        display: none;
    }
`