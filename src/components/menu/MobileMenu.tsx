import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type MenuTypeProps = {
    menuItem: Array<string>
};

export const MobileMenu = (props: MenuTypeProps) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItem.map((item) => {
                        return <li>
                            <a href="#">
                                {item}
                            </a>
                        </li>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    ul {
        display: flex;
        gap: 60px;
        list-style: none;
        flex-direction: column;
        justify-content: center;
    }
    
    overflow: hidden;

    display: none;
    position: fixed;
    z-index: 9999;
    background-color: rgba(238, 238, 238, 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;

    ${props => props.isOpen && css<{ isOpen: boolean }>` 
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    span {
        position: absolute;
        top: 40px;
        right: 30px;
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        z-index: 999999;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(0, 0, 0, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 28px;
            height: 2px;
            position: absolute;
            background-color: ${theme.colors.font};
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`