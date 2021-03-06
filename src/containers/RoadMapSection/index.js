import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import RoadMap from '../../components/RoadMap'
const RoadMapSection = () => {
    return(
        <div id='timeLine' className="roadmap-section text-center">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Road Map" subTitle="What has been done and our plan for future" />
                    </Col>
                </Row>
                <RoadMap />
            </Container>
	    </div>
    )
}
export default RoadMapSection