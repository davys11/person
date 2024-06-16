import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string
    description?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <BlockIcon>
            <svg width={props.width || "30"} height={props.height || "30"} viewBox={props.viewBox || "0 0 30 30"}
                 fill={props.fill || "#666"} xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
            </svg>
            <span>{props.description}</span>
        </BlockIcon>
    );
};

const BlockIcon = styled.span`
    display: inline-block;
`