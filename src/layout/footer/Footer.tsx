import React from 'react';
import {Container} from "../../components/Container";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Menu} from "../../components/menu/Menu";
import {menuItem} from "../header/Header";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <FooterStyled>
                    <Menu menuItem={menuItem}></Menu>
                    <IconHeader>
                        <Icon iconId={"telegram"} width={'30'} height={'30'} viewBox={"0 0 50 50"}/>
                        <Icon iconId={"instagram"} viewBox={"0 0 50 50"} width={'30'} height={"30"}/>
                        <Icon iconId={"github"} viewBox={"0 0 50 50"} width={'30'} height={"30"}/>
                    </IconHeader>
                </FooterStyled>
            </Container>
        </FooterBlock>
    );
};

const FooterBlock = styled.div``

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    padding: 45px 15px;
    border-top: 1px solid ${theme.colors.font};    
`

const IconHeader = styled.header`
    display: flex;
    gap: 20px;
`