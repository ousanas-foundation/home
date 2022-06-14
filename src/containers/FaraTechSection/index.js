import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import AllFeatures from '../../components/Features'
const FeatureSection = () => {
    return(
        <div id="features" className="feature-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Katanga Wallet Features" subTitle="" />
                    </Col>
                    <AllFeatures />
                </Row>
            </Container>
        </div>
    )
}
export default FeatureSection