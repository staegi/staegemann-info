import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Intro() {
    return (
        <Jumbotron className="mb-5">
            <Container>
                <h1>This is Thomas!</h1>
                <p>full stack developer, system architect, software engineering consultant and agile coach</p>
                <Button href="mailto:thomas@staegemann.info">Contact me</Button>
            </Container>
        </Jumbotron>
    );
}

export default Intro;
