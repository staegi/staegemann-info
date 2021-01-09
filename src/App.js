import React from 'react';
import Container from 'react-bootstrap/Container';
import Parallax from 'react-rellax'
import Intro from './Intro';
import Header from './Header';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
import TechnologySection from './TechnologySection';
import WorkSection from './WorkSection';
import projects from './const/projects';
import technologies  from './const/technologies';
import media from './const/media';

function App() {
    return (
        <div>
            <Container>
                <a name="home"/>
                <Header/>
                <SocialMedia media={media}/>
                <Parallax speed={6}>
                    <Intro/>
                </Parallax>
                <Parallax speed={4}>
                    <TechnologySection technologies={technologies}/>
                </Parallax>
                <Parallax speed={2}>
                    <WorkSection projects={projects}/>
                </Parallax>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
