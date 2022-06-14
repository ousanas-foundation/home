import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/RegisterForm'
import OurArea from '../../components/OurArea'
import SectionTitle from '../../components/SectionTitle'
const ManifestoBanner = () => (
    <div id="banner" className="banner-area banner-area-2">
        <Container>
            <Row className="justify-content-md-center">
                <Col >
                    <h2 className="entry-sub-title">The Ousanas Foundation Manifesto</h2>
                    <h1 className="gradient" >Empowering our youth by creating blockchain use case</h1>
                    <a className="btn btn-white" href="#">Learn More about our project</a>
                </Col>
                
            </Row>
        </Container>
    
    </div>
)
export default ManifestoBanner