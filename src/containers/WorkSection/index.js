import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Work from '../../components/Work'
const WorkSection = () => {
    return(
        <div className="work-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="How It’s Work" subTitle="More Easy" />
                    </Col>
                </Row>
                <Work />
            </Container>
	    </div>
    )
}
export default WorkSection