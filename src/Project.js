import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactMarkdown from 'react-markdown';

function Project(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} className="border-bottom"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {props.client ? (<Card.Subtitle className="mt-2 mb-2">Client: {props.client}</Card.Subtitle>) : ''}
                <Card.Text>
                    <ReactMarkdown source={props.description}/>
                </Card.Text>
                {props.link ? (<Button target="_blank" variant="secondary" href={props.link}>Visit {props.link.includes('itunes.apple.com') ? 'App Store' : 'Website'}</Button>) : ''}
            </Card.Body>
        </Card>
    );
}

export default Project;
