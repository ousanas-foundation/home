import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import RoadMap from '../../components/RoadMap'
const RoadMapSection = () => {
    return(
        <div className="roadmap-section text-center">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Road Map" subTitle="More Easy" />
                    </Col>
                </Row>
                <RoadMap />
            </Container>
	    </div>
    )
}
export default RoadMapSection