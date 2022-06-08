import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Video from '../../components/Video'

const AboutSection = () => {
    return(
        <div id="about" className="about-area">
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionTitle title="OUR VISION" subTitle="Explain in a few word" />
                    </Col>
                    <Col lg={6}>
                        <Video />
                    </Col>
                    <Col lg={6}>
                        <div className="pd-top-37">
                            <h3 className="entry-title">What we want to achieve </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uto labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par iatur sed do eiusmod tempor incididunt.</p>
                            <a className="btn btn-white-shadow" href="#">learn more</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default AboutSection