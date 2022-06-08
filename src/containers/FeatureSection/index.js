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
                        <SectionTitle title="CoinAge Features" subTitle="Luscious For Your Business" />
                    </Col>
                    <AllFeatures />
                </Row>
            </Container>
        </div>
    )
}
export default FeatureSection