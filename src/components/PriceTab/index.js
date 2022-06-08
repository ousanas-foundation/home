import React, {Component} from 'react'
import { Tabs, Col, Row, Tab} from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllPriceInfo } from '../../actions/price.actions'
import { bindActionCreators } from 'redux'
import  Price from './../Price'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { faRubleSign } from '@fortawesome/free-solid-svg-icons'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'

class PriceTab extends Component {
    constructor(){
        super()
        
    }
    componentDidMount(){
        this.props.getAllPriceInfo()
    }
    render(){
        let datainfo = this.props.priceInfo[0];
        return(
            <div className="pricing-tabs">
               <Tabs className="pricing-tabs-list" defaultActiveKey="tab1" id="pricingtab">
                    <Tab eventKey="tab1" title={[<FontAwesomeIcon key="faDollarSign" icon={faDollarSign} />, "USD"]}>
                        <Row>
                            {
                                datainfo &&
                                    datainfo.USD.map((item, index) => (
                                        <Col lg="3" md="6" key={index}>
                                            <Price data={item} currency={faDollarSign} />
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="tab2" title={[<FontAwesomeIcon key="faPoundSign" icon={faPoundSign} />, "GBP"]}>
                        <Row>
                            {
                                datainfo &&
                                    datainfo.GBP.map((item, index) => (
                                        <Col lg="3" md="6" key={index}>
                                            <Price data={item}  currency={faPoundSign} />
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="tab3" title={[<FontAwesomeIcon key="faEuroSign" icon={faEuroSign} />, "EUR"]}>
                        <Row>
                            {
                                datainfo &&
                                    datainfo.EUR.map((item, index) => (
                                        <Col lg="3" md="6" key={index}>
                                            <Price data={item} currency={faEuroSign} />
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="tab4" title={[<FontAwesomeIcon key="faRubleSign" icon={faRubleSign} />, "RUB"]}>
                        <Row>
                            {
                                datainfo &&
                                    datainfo.RUB.map((item, index) => (
                                        <Col lg="3" md="6" key={index}>
                                            <Price data={item} currency={faRubleSign} />
                                        </Col>
                                    ))
                            }
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    priceInfo: state.priceInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllPriceInfo: bindActionCreators(getAllPriceInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceTab);