import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Blog from '../../components/Blog'
const BlogSection = () => {
    return(
        <div id="blog" className="blog-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <SectionTitle title="Letest Blog" subTitle="Our Evolution" />
                    </Col>
                    <Blog />
                </Row>
            </Container>
	    </div>
    )
}
export default BlogSection