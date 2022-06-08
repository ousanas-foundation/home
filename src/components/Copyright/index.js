import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Copyright = (props) => {
    return(
        <div className="footer-bottom">
            <Container>
                <Row>
                    <Col>
                        <div className="copyright">
                            <p>{props.text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Copyright