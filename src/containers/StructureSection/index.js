import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DetailStructure from '../../components/DetailStructure'
import SectionTitle from '../../components/SectionTitle'
import Work from '../../components/Work'
const StructureSection = () => {
    return(
        <div id='structure' className="work-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Ousanas Foundation DAO Structure" subTitle="This is a proposed structure of The DAO" />
                    </Col>
                    <Col  lg={6}>
                    <div className='structure'></div>

                    </Col>
                </Row>
                <DetailStructure />
            </Container>
	    </div>
    )
}
export default StructureSection