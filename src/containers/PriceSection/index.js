import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import PriceTab from '../../components/PriceTab'
const PriceSection = () => {
    return(
        <div className="pricing-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Suitable Price" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
                    </Col>
                    <Col md={12}>
                        <PriceTab />
                    </Col>
                </Row>
            </Container>
	    </div>
    )
}
export default PriceSection