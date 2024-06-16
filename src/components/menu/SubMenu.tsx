import React from 'react';
import styled from "styled-components";

type MenuTypeProps = {
    menuItem: Array<string>
};

export const SubMenu = (props: MenuTypeProps) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((item) => {
                    return <li><a href="#">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    justify-content: center;
    margin: 30px 0;
    
    ul {
        display: flex;
        gap: 60px;
        list-style: none;
    }
`