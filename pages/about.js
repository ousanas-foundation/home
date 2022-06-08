import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllBlogInfo } from '../src/actions/blog.actions'
import { bindActionCreators } from 'redux'
import MainLayout from '../src/components/Layout'
import InnerPageSection from '../src/containers/InnerPageSection'
import FooterSection from '../src/containers/FooterSection'

class about extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getAllBlogInfo()
    }
    render() {
        return (
            <MainLayout>
                <InnerPageSection title="Who are we" />
                
                <div className="main-blog-section">
                    <Container>
                        <Row>
                            <Col lg={10}>

                                <div className="single-post" >

                                    <div className="post-details">
                                        <div className="entry-title">
                                            <h3>
                                                What is Ousanas Foundation

                                            </h3>
                                        </div>

                                        <p className="entry-content">
                                            Hodl Hodl is a global P2P Bitcoin trading platform, that allows users to trade directly with each other and it doesn't hold user’s funds — locking it in multisig escrow instead. This minimizes the possibility of Bitcoin assets theft and reduces trading time.

                                            Because Hodl Hodl does not hold any money (neither Bitcoin, nor fiat) it is not subject to complex compliance procedures. This allows trades to happen directly between users' wallets and without having to submit your identity to the trading platform.</p>
                                        <div className="entry-title">
                                            <h3>
                                                What is Katanga Wallet

                                            </h3>
                                        </div><p>

                                            How we are different
                                            The main difference between Hodl Hodl and other P2P Bitcoin trading platforms is that we care about your privacy and do not hold user’s funds. Hodl Hodl is also cheaper than most of the other P2P trading platforms, with a maximum fee of 0.3% per trade.

                                            Another important feature of Hodl Hodl is that you can trade Bitcoin in any location in the world, use any payment method, and be paid in any currency.

                                            OTC trading desk
                                            Hodl Hodl helps customers that request trading large amounts find a counterparty, in partnership with licensed European broker Tenbagger. We have our own OTC trading desk, providing non-custodial escrow services for trading Bitcoin.

                                            OTC trading with us gives you:

                                            Secure transactions
                                            Competitive rates
                                            Same day settlement
                                            Private and personalized trading experience
                                            24/7 personalized support</p>

                                    </div>
                                </div>


                            </Col>

                        </Row>
                    </Container>
                </div>
                <FooterSection />
            </MainLayout >
        )
    }
}

about.getInitialProps = () => {
    return {};
};



const mapStateToProps = state => ({
    blogInfo: state.blogInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllBlogInfo: bindActionCreators(getAllBlogInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(about);