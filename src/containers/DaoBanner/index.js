import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/RegisterForm'
import OurArea from '../../components/OurArea'
import SectionTitle from '../../components/SectionTitle'
const DaoBanner = () => (
    <div id="banner" className="banner-area-3">
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8} lg={12}>
                    <h1 style={{fontSize: 40, textAlign:'center'}}>Welcome to <br />The Ousanas Foundation DAO</h1>
                    <h2 style={{fontSize: 30, textAlign:'center'}}>Decentralized Autonomous Organization (DAO) collaborating to improve the access to blockchains technology and cryptocurrencies.</h2>
                    <a className="btn btn-white" style={{textAlign:'center'}} href="#">Download Ousanas Foundation DAO Charter</a>
                </Col>
              
            </Row>
        </Container>
    </div>
)
export default DaoBanner