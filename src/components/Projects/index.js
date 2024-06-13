import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('All');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked many projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'All' ?
            <ToggleButton active value="All" onClick={() => setToggle('All')}>All</ToggleButton>
            :
            <ToggleButton value="All" onClick={() => setToggle('All')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Front_end' ?
            <ToggleButton active value="web app" onClick={() => setToggle('Front_end')}>Front end web app</ToggleButton>
            :

            <ToggleButton value="web app" onClick={() => setToggle('Front_end')}>Front end web app</ToggleButton>
          }
          <Divider />
          {toggle === 'Full_stack' ?
            <ToggleButton active value="Full stack" onClick={() => setToggle('Full_stack')}>Full Stack web app</ToggleButton>
            :
            <ToggleButton value="Full stack" onClick={() => setToggle('Full_stack')}>Full Stack web app</ToggleButton>
          }
          <Divider />
          {toggle === 'Other' ?
            <ToggleButton active value="other" onClick={() => setToggle('other')}>Other</ToggleButton>
            :
            <ToggleButton value="other" onClick={() => setToggle('other')}>Other</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'All' && projects
            .map((project,index) => (
              <ProjectCard id={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project,id) => (
              <ProjectCard project={project} id={id} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects