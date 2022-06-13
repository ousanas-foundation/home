import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/RegisterForm'
import OurArea from '../../components/OurArea'
import SectionTitle from '../../components/SectionTitle'
const BannerSection = () => (
    <div id="banner" className="banner-area banner-area-2">
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={7}>
                    <h1 className="entry-title">Ousanas Foundation <br />Blockchain for East-Africa</h1>
                    <h2 className="entry-sub-title">Decentralized Autonomous Organization (DAO) collaborating homegrown talent to improve the access to cryptocurrencies and blockchains technology in East-Africa</h2>
                    <a className="btn btn-white" href="#">Learn More about our project</a>
                </Col>
                <Col lg={5} md={8}>
                    <div className="register-form text-center mg-bottom-100">
                        <h3 className="title">work with us</h3>
                        <h4 className="sub-title">Register Now !</h4>
                        <RegisterForm />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid="true">
            <Row>
                <Col>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="Currently Working On"/>
                    </Col>
                </Row>
                    <OurArea />
                </Col>
            </Row>
        </Container>
    </div>
)
export default BannerSection