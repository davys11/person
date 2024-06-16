import React from 'react';
import {SectionTitle} from "../../components/title/TitleSection";
import {SectionSubtitle} from "../../components/subtitle/SubtitleSection";
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {Container} from "../../components/Container";

export const Project = () => {
    return (
        <ProjectBlock>
            <Container>
                <SectionTitle>Project</SectionTitle>
                <SectionSubtitle>Completed projects</SectionSubtitle>
                <Projects>
                    <ProjectItem name='sabtrans'
                                 description={'ERP/CRM system for special equipment rental companies'}
                                stack={['PHP', 'React', 'Storage', 'DevOps']}/>
                    <ProjectItem name='sabtrans'/>
                    <ProjectItem name='sabtrans'/>
                </Projects>
            </Container>
        </ProjectBlock>
    );
};

const ProjectBlock = styled.div`
`

const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
`