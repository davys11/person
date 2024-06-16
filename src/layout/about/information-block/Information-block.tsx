import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type InformationBlockPropsType = {
    title: string,
    colorBlockTime?: string,
    textBlockTime: string,
    nameObject?: string,
    address?: string,
    datePeriod?: string
}

type CssInformationBlockPropsType = {
    colorBlockTime?: string,
}


export const InformationBlock = (props: InformationBlockPropsType) => {
    return (
        <InfoBlock>
            <SubBlock>
                <InfoTitle>{props.title}</InfoTitle>
                <ButtonTypeTime colorBlockTime={props.colorBlockTime}>{props.textBlockTime}</ButtonTypeTime>
            </SubBlock>
            <div>
                <SubBlock>
                    <div>
                        <IconBlock>
                            <Icon iconId={"place-about"} width={'16'} height={'12'} viewBox={"0 0 16 12"}
                                  description={props.nameObject}/>
                            <Icon iconId={"location-about"} width={'16'} height={'12'} viewBox={"0 0 16 12"}
                                  description={props.address}/>
                        </IconBlock>
                    </div>
                    <IconBlock>
                        <Icon iconId={"date-about"} width={'16'} height={'12'} viewBox={"0 0 16 12"}
                              description={props.datePeriod}/>
                    </IconBlock>
                </SubBlock>
            </div>
        </InfoBlock>
    );
};

const IconBlock = styled.div`
    color: #A7A7A7;
    margin-top: 10px;
    display: flex;
    gap: 25px;
    font-size: 12px;
`

const InfoTitle = styled.h4`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
`

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid rgba(235, 234, 237, 1);
    padding-bottom: 20px;
    margin-bottom: 30px;

    & > div:last-child {
        text-align: right;
    }

`

const SubBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonTypeTime = styled.div<CssInformationBlockPropsType>`
    display: inline-block;
    padding: 8px 20px;
    border-radius: 100px;
    font-size: 9px;
    color: #018C0F;
    font-weight: 600;
    background: ${props => props.colorBlockTime || 'rgba(215, 255, 224, 1)'}

`