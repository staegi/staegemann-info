import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-light">
            <Container className="pb-5 pt-5">
                <small>
                    <Row>
                        <Col md={3}>
                            <h5>Imprint</h5>
                            <p>
                                Thomas Stägemann<br />
                                Software Developer<br />
                                <br />
                                Ribnitzer Straße 20<br />
                                13051 Berlin<br />
                                Germany
                            </p>
                        </Col>
                        <Col md={9}>
                            <h5>Disclaimer</h5>
                            <p>staegemann.info is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information contained within the site is periodically updated, no guarantee is given that the information provided in this Web site is correct, complete, and up-to-date.</p>
                            <p>Although the staegemann.info website may include links providing direct access to other Internet resources, including websites, staegemann.info is not responsible for the accuracy or content of information contained in these sites.</p>
                            <p>Links from staegemann.info to third-party sites do not constitute an endorsement by staegemann.info of the parties or their products and services. The appearance on the Web site of advertisements and product or service information does not constitute an endorsement by staegemann.info, and staegemann.info has not investigated the claims made by any advertiser. Product information is based solely on material received from suppliers.</p>
                        </Col>
                    </Row>
                </small>
            </Container>
        </footer>
    );
}

export default Footer;
