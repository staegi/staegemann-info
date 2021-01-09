import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function TechnologySection(props) {
    return (
        <section id="technologies" className="text-center mb-5">
            <a name="technologies">
                <h3 className="text-uppercase">Technologies</h3>
            </a>
            <Row>
                {props.technologies.map((technology) =>
                    <Col md={2} className="pt-4 pb-4">
                        <Image title={technology.title} alt={technology.title} src={technology.regular}
                               srcSet={technology.regular + ' 1x,' + technology.retina + ' 2x'} fluid/>
                    </Col>
                )}
            </Row>
        </section>
    );
}

export default TechnologySection;
