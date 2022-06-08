import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FunFactor from '../../components/FunFactor'
const FunFactSection = () => {
    return(
        <div className="factor-section">
            <Container>
                <Row className="justify-content-md-center">
                    <FunFactor />
                </Row>
            </Container>
	    </div>
    )
}
export default FunFactSection