import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Address from '../../components/Address'
import ContactForm from '../../components/ContactForm'
import PartnerCarousel from '../../components/PartnerCarousel'
const ContactSection = () => {
    return(
        <div id="contact" className="contact-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Contact Us" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
                    </Col>
                    <Col md={6}>
                        <Address />
                    </Col>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                    <Col className="pd-top-150">
                        <PartnerCarousel />
                    </Col>
                </Row>
            </Container>
	    </div>
    )
}
export default ContactSection