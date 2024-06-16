import React from 'react';
import square from "../../assets/images/square.png";
import styled from "styled-components";
import {InformationBlock} from "./information-block/Information-block";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const About = () => {
    return (
        <SectionAbout>
            <Container>
                <FlexContainer>
                    <AboutTitle>About Me</AboutTitle>
                    <AboutContainer>
                        <p>I am a business analyst and developer with experience as a team lead for a five-person team.
                            As a full-stack developer, I handle all aspects of software development. My skills include
                            analyzing business requirements, designing solutions, and implementing them effectively. My
                            background helps me bridge the gap between business needs and technical execution, ensuring
                            successful project delivery.</p>

                        <AboutTitle>Work Experience</AboutTitle>
                        <InformationBlock
                            title={'Practice'}
                            textBlockTime={'Full Time'}
                            nameObject={'Student and first works'}
                            address={'Russia, Syktyvkar'}
                            datePeriod={'Sep 2014 - Jul 2018'}
                        />
                        <InformationBlock
                            title={'Developer and Analyst'}
                            textBlockTime={'Full Time'}
                            nameObject={'Sole Entrepreneur'}
                            address={'Russia, Moscow'}
                            datePeriod={'Aug 2018 - Now'}
                        />

                        <AboutTitle>Education</AboutTitle>
                        <InformationBlock
                            title={'Applied Informatics (Higher education)'}
                            textBlockTime={'Full Time'}
                            nameObject={'Syktyvkar State University'}
                            address={'Syktyvkar'}
                            datePeriod={'Sep 2014 - May 2018'}
                        />
                    </AboutContainer>
                </FlexContainer>
                <Photo src={square} alt=""/>
            </Container>
        </SectionAbout>
    );
};

const AboutTitle = styled.h3`
    font-size: 42px;
    color: ${theme.colors.title};
    margin: 38px 0;
`

const SectionAbout = styled.section`
    position: relative;
`

const FlexContainer = styled.div`
`

const AboutContainer = styled.div`
    max-width: 710px;
`

const Photo = styled.img`
    position: absolute;
    right: 0;
    top: -150px
`