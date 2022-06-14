import React from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainLayout from '../../src/components/Layout'
import VideoSection from '../../src/containers/VideoSection'
import FaraTech from '../../src/components/FaraTech'
import ContactSection from '../../src/containers/ContactSection'
import FooterSection from '../../src/containers/FooterSection'
import ManifestoBanner from "../../src/containers/ManifestoBanner";
import { Col, Container, Row } from "react-bootstrap";
import Commitment from "../../src/containers/Commitment";
import ManifestoVideo from "../../src/containers/ManifestoVideo";
import SectionTitle from "../../src/components/SectionTitle";
// Initialize Firebase
function Manifesto() {
    return (
        <MainLayout>
            <ManifestoBanner />
            <div className="main-blog-section">
                <Container >
                    <Row >
                        <Col lg={6}>
                            <div className="manifesto-title">
                                <p>We strongly believe that the solution to the never-ending problems in our beloved Africa is Digitalized Technologies. </p>

                            </div></Col>
                        <Col><div className="manifesto-title">
                            <p>We, Africans once were a place of technological experiment and pioneer in innovation, and that has been taken from and we are left behind. Yet, the fourth industrial revolution have had opened the door to disruption of the socio-economic atmosphere in Africa. We have a choice to make. </p>

                        </div></Col>
                       
                    </Row>
                    <Row> <Col lg={6}><div className="manifesto-title">
                            <p>We either pass the golden chance like the previous industrial revolutions or we take it. We take it and be part of the universal fight for freedom and fair economics.</p>

                        </div></Col><Col><div className="manifesto-title">
                            <p>We believe that financial freedom shouldn’t be a nerdy guy’s fantasy as once was freedom of speech or opinion. It’s Here and Now, it’s up to us to utilize it for solving our existing solutions and creating opportunities.</p>

                        </div></Col></Row>
                    <Row >
                        
                        <Col lg={6}><div className="manifesto-title">
                            <p>Thus, We, The Ousanas Foundation, are unstrained by centralized agents, collaborating to create use cases for blockchain technology by leveraging the decentralized nature of the technology.</p>

                        </div></Col>
                        <Col></Col>
                       

                    </Row>

                </Container>
            </div>
           
            <ManifestoVideo />
            <Commitment />
            <div id="features" className="feature-section">
            <Container>
                <Row className="row-eq-rs-height">
                    <Col md={12}>
                        <SectionTitle title="FataTech KB" subTitle="will take the role of a caretaker until the Ousanas foundation DAO, and its community can operate independently." />
                    </Col>
                    <FaraTech/>
                    </Row>
                    </Container>
                    </div>
                    <div className="main-blog-section"> <h4 style={{marginTop: 80,marginLeft:10, fontSize:20, textAlign:'center'}}>This Manifesto is not a completed work. We believe that a greater cause can be pursued if the level of cooperation needed can be achieved. Thus, we call for community engagement. If you have any input, feel free to contact us and we will talk about how you can take part.</h4>
            </div>
            <ContactSection />
            <FooterSection />
        </MainLayout>
    );
}


export default Manifesto;