import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Safe from '../../components/Safe'
const SafeSection = () => {
    return(
        <div id="safety" className="safe-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Safe />
                </Row>
            </Container>
	    </div>
    )
}
export default SafeSection