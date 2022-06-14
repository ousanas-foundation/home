import React, {Component, useState} from "react"
import { connect } from "react-redux"
import { Row, Col } from 'react-bootstrap'


export default function DetailStructure() {
    const [detailStructure] = useState([
        {
            label:'TLR Holders',
            text:'Anyone who holds one Talari token or more on Stellar or Polygon blockchain can vote on the proposal and vote on how the treasury is used by the team behind the Ousanas foundation. With 10,000 Talari as collateral, holders can request a transaction from the treasury. More about this on the Charter'
        },{
            label:'ShenGo',
            text:'Elected members of committee containing 15 legal persons, assigned with the task of allocated budget and approving transactions from the treasury to operational vault managed by General Manager.'
        },{
            label:'General Manager',
            text:'A member of the ShenGo committee and elected by the ShenGo. Tasked with implementing strategical planning approved by ShenGo to uphold the Osuanas Foundation values and approves the financial activity of the operations associated with it. '
        },{
            label:'Enbua Tebaki',
            text:'Elected members of committee containing two (2) legal persons, assigned to safeguard the Ousanas DAO’s value as described in the Manifesto and its treasury from abuse by Holders and/or Elected committee. If a resolution cannot be attained, the Enbua Tabaki is tasked with presenting its case to the Aragon Court. '
        },{
            label:'Aragon Court',
            text:'Aragon court is a Decentralized Dispute Resolution Protocol that can handle subjective disputes that cannot be resolved by smart contracts alone. Anyone who holds Talari Token can present its case to the court. Read more about Aragon Court'
        },
    ])
    return(
        <Row className="justify-content-md-center">
            {
                detailStructure.map( (item, index) => (
                    <Col lg={6} xs={12} key={index}>
                        <div className="single-element">
                            <h4 className="entry-title"><a href="#">{item.label}</a></h4>
                            <p>{item.text}</p>
                        </div>
                    </Col>
                ))
            }
            <Col md={12} className="text-center">
                <a className="btn btn-white-shadow" href="#">learn more</a>
            </Col>
        </Row>
    )
}

