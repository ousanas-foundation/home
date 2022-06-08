import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Team from '../../components/Team'
const TeamSection = () => {
    return(
        <div className="team-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Our Team" subTitle="we are dedicated" />
                    </Col>
                </Row>
                <Team />
            </Container>
	    </div>
    )
}
export default TeamSection