import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllBlogInfo } from '../src/actions/blog.actions'
import { bindActionCreators } from 'redux'
import MainLayout from '../src/components/Layout'
import InnerPageSection from '../src/containers/InnerPageSection'
import FooterSection from '../src/containers/FooterSection'
import WalletBanner from "../src/containers/WalletSection"
import WorkSection from "../src/containers/WorkSection"
import BuySection from "../src/containers/BuySection.js/index.js"
import FeatureSection from "../src/containers/FeatureSection"

class wallet extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getAllBlogInfo()
    }
    render() {
        return (
            <MainLayout>
                <WalletBanner/>
                <BuySection />
                <WorkSection />
                <FeatureSection />
                <FooterSection />
            </MainLayout >
        )
    }
}

wallet.getInitialProps = () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(wallet);