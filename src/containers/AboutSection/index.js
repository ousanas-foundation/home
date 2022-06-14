import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'
import Video from '../../components/Video'

const TalariSection = () => {
    return(
        <div id="talari" className="about-area">
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionTitle title="TLR Token" subTitle="Explain in a few word" />
                    </Col>
                    
                    <Col lg={6}>
                        <div className="pd-top-37">
                            <h3 className="entry-title">Talari Token </h3>
                            <p>Talari Token is a cryptocurrency and an application of blockchain.It is deployed on both Stellar and Polygon Blockchains. Currently, a user of the Katanga Fantasy game can earn Talari by participating in a weekly Digital football tournament or by trading a football player card on the Katanga Fantasy transfer window. </p>
                            <p>Talari Token can be bought and sold or exchanged to USDT using Katanga Wallet, an android application developed by Ousanas foundation. The token used in all of the above is minted on Stellar Blockchain.</p>
                            <p>In addition, Talari Token is the main coordination mechanism of The Ousanas Foundation DAO, Due to the requirement of a smart contract to run a Dao, the Token used to participate in The Ousanas Foundation DAO must be for polygon blockchain. The Ousanas foundation has developed a bridge between those two blockchain networks enabling 1-on-1 exchange.  </p>
                          <p>Ousanas Foundation is working actively  to create value for the token by deploying many other use cases where users can earn and spend Talari</p>
                            <a className="btn btn-white-shadow" href="#">learn more</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='talari-about'></div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default TalariSection