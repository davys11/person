import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type LinkPropsType = {
    type: number,
    link: string,
}
export const LinkProject = (props: LinkPropsType) => {
    const icon = props.type == 0 ? 'link-chain' : 'git';
    const text = props.type == 0 ? 'Live Preview' : 'View Code';
    return (
        <Link>
            <a href='#'>
                <Icon iconId={icon} width={'20'} height={'20'} viewBox={"0 0 20 20"} fill="none"/>
                {text}
            </a>
        </Link>
    );
};

const Link = styled.div`
    a {
        display: flex;
        gap: 5px;
        text-decoration: underline;
    }
    
    Icon {
        margin-left: 20px;
    }

    a:hover {
        text-decoration: none !important;
    }
`