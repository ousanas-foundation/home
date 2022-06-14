import React, {Component, useState} from 'react'
import { Col } from 'react-bootstrap'

export default function index() {
    const [faratechInfo] = useState([
        {
            label:'01',
            text:'Building and leading projects that builds value-adding products which utilize blockchain technology.',
        }, {
            label:'02',
            text:'Work to build a community that shares and thrives to fulfil this manifesto.',
        }, {
            label:'03',
            text:'Work to create a network of young, talented and crypto-guru peoples ',
        }, {
            label:'04',
            text:'Work to build a DAO system that can operate independently.',
        }, {
            label:'05',
            text:'Using the proceeds from token sales, fund projects and teams that work to uphold the value of’ this manifesto .',
        }, {
            label:'06',
            text:'Using all of the assets at hand to do the work of maintaining and spreading the value of this manifesto.',
        },
    ])
    return(
        <React.Fragment>
            {
                faratechInfo.map( (item, index) => (
                    <Col lg={4} md={6} className="text-center" key={index}>
                        <div className="single-element">
                            
                            <h4 className="entry-title" style={{textAlign:'left'}}><a href="#">{item.label}</a></h4>
                            <h4 style={{fontSize: '22px', textAlign:'left', fontWeight:'bold'}}>{item.text}</h4>
                        </div>
                    </Col>	
                ))
            }
        </React.Fragment>
    )
}
