import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Project from './Project'

function WorkSection(props) {
    return (
        <section id="work" className="mb-5">
            <a name="work">
                <h3 className="text-center text-uppercase">My work</h3>
            </a>
            <Tabs defaultActiveKey={props.projects[0].key} variant="pills"
                  className="border nav-justified mb-3 bg-light">
                {props.projects.map((tab) =>
                    <Tab title={tab.title} eventKey={tab.key}>
                        <CardColumns>
                            {tab.items.map((project) =>
                                <Project title={project.title} client={project.client} image={project.image}
                                         description={project.description} link={project.link}/>
                            )}
                        </CardColumns>
                    </Tab>
                )}
            </Tabs>
        </section>
    );
}

export default WorkSection;
