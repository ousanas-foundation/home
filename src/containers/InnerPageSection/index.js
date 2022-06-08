import React from 'react'
import { Container, Row, Col, Breadcrumb  } from 'react-bootstrap'
const InnerPageSection = (props) => {
    return(
        <div className="page-title mg-bottom-100">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>{props.title}</h2>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default InnerPageSection