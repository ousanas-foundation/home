import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/RegisterForm'
import OurArea from '../../components/OurArea'
import appCover from '../../assets/images/bg/01.png';
import SectionTitle from '../../components/SectionTitle'
const WalletBanner = () => (
    <div id="banner" className="banner-area banner-area-2">
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={7}>
                    <h1 className="entry-title">Katanga Wallet <br />Paving the way to cryptocurrencies</h1>
                    <h2 className="entry-sub-title">Buy, send, exchange, & Stable coin and other cryptocurrencies on free market </h2>
                    <a className="btn btn-white" href="#">Download from Playstore</a>
                </Col>
                <Col lg={5} md={8}>
                <img width={"500px"} height={"700px"} src={appCover} alt="safe" />
                </Col>
            </Row>
        </Container>
    </div>
)
export default WalletBanner