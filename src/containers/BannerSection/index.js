import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/RegisterForm'
import CryptoCarousel from '../../components/CryptoCarousel'
const BannerSection = () => (
    <div id="banner" className="banner-area banner-area-2">
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={7}>
                    <h1 className="entry-title">CoinAge <br />Be your Own Bank</h1>
                    <h2 className="entry-sub-title">World Most Secure & Easy Way</h2>
                    <a className="btn btn-white" href="#">Learn More</a>
                </Col>
                <Col lg={5} md={8}>
                    <div className="register-form text-center mg-bottom-100">
                        <h3 className="title">Get Free Accout</h3>
                        <h4 className="sub-title">Register Now !</h4>
                        <RegisterForm />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid="true">
            <Row>
                <Col>
                    <CryptoCarousel />
                </Col>
            </Row>
        </Container>
    </div>
)
export default BannerSection