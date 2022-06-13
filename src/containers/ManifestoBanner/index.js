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
                    <h1 className="entry-title">The Ousanas Foundation Manifesto</h1>
                    <h2 className="entry-sub-title">Decentralized Autonomous Organization (DAO) collaborating homegrown talent to improve the access to cryptocurrencies and blockchains technology in East-Africa</h2>
                    <a className="btn btn-white" href="#">Learn More about our project</a>
                </Col>
                
            </Row>
        </Container>
    
    </div>
)
export default ManifestoBanner