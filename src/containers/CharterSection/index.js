import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FunFactor from '../../components/FunFactor'
const CharterSection = () => {
    const [charterChapter] = useState([
        {
            img:'manifesto',
            label:'The Ousanas Foundation Manifesto',
            formal: '(Mission Statement)'
        }, {
            img:'contract',
            label:'Getting Involved',
            formal: '(Code of Conduct)'
        }, {
            img:'compliant',
            label:'Ousanas Foundation Governance',
            formal: '(Article of Association)'
        },
    ])
    return(
        <div id='charter' className="factor-section">
            <Container>
            <h4 style={{textAlign: 'center',  fontSize: 40, color:'white'}}>The Ousanas Foundation Charter</h4>
            <h6 style={{fontSize: 18, color: 'white', marginBottom: 100, textAlign:'center'}}>The Official Governing Document of the Ousanas Foundation DAO</h6>
                <Row className="justify-content-md-center">
                <React.Fragment>
                {
                    charterChapter.map( (item, index) => (
                        <Col lg={3} md={6} className="text-center" key={index}>
                            <div className="single-fact">
                                <div className="icon">
                                    <img color='white' src={require(`./../../assets/images/icons/${item.img}.png`)} alt="icon" />
                                </div>    
                                <h3 className="sub-title">{item.label}</h3>
                                <h4 style={{fontSize: 14,color: 'white'}}>{item.formal}</h4>
                            </div>
                        </Col>	
                    ))
                }
            </React.Fragment>
                </Row>
                <Col md={12} className="text-center">
                <a className="btn btn-white-shadow" href="#">Download Charter</a>
            </Col>
            </Container>
	    </div>
    )
}
export default CharterSection