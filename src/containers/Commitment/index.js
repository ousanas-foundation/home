import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Safe from '../../components/Safe'
const Commitment = () => {
    const [commitment] = useState([
          {
            "text" : "We are committed to making the Ousanas Foundation the first African fully decentralized autonomous organization.",
            "img" : "23"
          },
          {
            "text" : "We are committed to collaboratively developing blockchain solutions that create value and solve existing socio-economic problems for our people.",
            "img" : "23"
          },
          {
            "text" : "We are committed to helping others who are working in goodwill and using their creativity to solve socio-economic issues via insight gained, networking and funding. ",
            "img" : "23"
          },
          {
            "text" : "We are commuted to raising the level of awareness and knowledge about cryptocurrency and blockchain via education and crypt-activism.",
            "img" : "23"
          },{
            "text" : "We are committed to creating open-source technology that opens the door for other to build up on it and improve its usability.",
            "img" : "23"
          },{
            "text" : "We are committed to creating a sustainable-profitable organization with a strong core value.",
            "img" : "23"
          },
        ]  )
    return(
        <div id="safety" className="safe-section">
            <Container>
                <Row className="justify-content-md-center">
                <React.Fragment>
                {
                    commitment.map( (item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className={"safe-factor safe-factor-" + (index + 1)}>
                                <div className="icon">
                                    <img src={require(`./../../assets/images/icons/${item.img}.png`)} alt="safe" />
                                </div>
                                <div className="safe-factor-details">
                                    <p className="content">{item.text}</p>	
                                </div>			
                            </div>
                        </Col>
                    ))
                }
            </React.Fragment>
                </Row>
            </Container>
	    </div>
    )
}
export default Commitment