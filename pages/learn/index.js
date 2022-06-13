import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllBlogInfo } from '../../src/actions/blog.actions'
import { bindActionCreators } from 'redux'
import Sidebar from '../../src/components/Sidebar'
import MainLayout from '../../src/components/Layout'
import InnerPageSection from '../../src/containers/InnerPageSection'
import FooterSection from '../../src/containers/FooterSection'
import LearnSidebar from "../../src/components/LearnSideBar"

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
                <InnerPageSection title="The Ousanas Foundation DAO" subTitle='Learn' />

                <div className="main-blog-section">
                    <Container>
                        <Row>
                            <Col lg={{ span: 3, offset: 1 }} className="mg-bottom-100">
                                <LearnSidebar />
                            </Col>
                            <Col lg={8}>

                                <div className="single-post" >
                                    <div className="entry-thum">
                                        <img src={require(`../../src/assets/images/blog/big/dao.jpg`)} alt="blog" />
                                    </div>

                                    <div className="post-details">


                                        <div className="entry-title">
                                            <h3>
                                                What is Decentralized Autonomous Organization (DA0)

                                            </h3>
                                        </div>
                                        <div className="entry-title">
                                            <p>
                                                In order to fully understand what DAO, it is better to go back to the history of the Interne itself. </p>
                                            <p>Back in 1985, when web 1.0 first implemented, it gave anyone with little codding knowledge the ability to publish content online and be heard. It was revolutionary at the time. The technology improved significantly by the launch of web 2.0, which paved the way for platform like Google and Facebook. This technology was amazing. Nemours multiple billionaire Companies come to life thanks to this technology.  However, it had one point-of-failure. These technologies where managed by a centralized organization, for example google is being managed by the giant technology company Google.Inc. </p>
                                            <p>The problem arising from having a century entities control technologies like these become imminent due the public’s knowledge of privacy increased. I think we all have to pay tribute to people like Edward Snowden and other for rising this issue to the public. So yeah, another technology with its own problem, another opportunity for improvement. Which paved the way to THE WEB 3.0</p>
                                            <p>The Web 3.0 began with the Bitcoin, with its monetary of policy of ‘Decentralization’, taking a dig at the centralized bank and their so-called ‘Fiat’ currencies, revolutionized finance like never before</p>
                                            <p>Inspired by this, Ethereum was founded by Vitalik Buterin, with additional feature of smart contract. Ethereum with its smart contract ability has make it possible to create 'Decentralized Autonomous Organizations' (DAOs), which are open-source software program that live on blockchain and allows management of assets without a trust or central body to pursue collective objectives.</p>
                                            <p>DAOs are the future of collaboration and work, so you will be listening to a lot greater about them in the close to future.</p>
                                            <p>Let breakdown the phase ‘Decentralized Autonomous organization ‘and discuss it word by word</p>
                                            <h3>Decentralized </h3>
                                            <p>The core of web 3 is being decentralized. It entails the fairness of control, by large number of people who share same interest. There is no central body who take the control and responsibility of running the thing forward. Work is done collaboratively, asset is managed together, and profit is shared equally.</p>
                                            <h3>Autonomous</h3>
                                            <p>Another parting ways of the DAO’s from the traditional organization is it feature to be autonomous. Traditional organizations need to get license from a governing agency, such as the tax department, business bureau, charity commission, etc. to operate.</p>
                                            <p>DAO’s are Autonomous, anyone, from anywhere, can join the network, and pursuing the shared subject. The software that can be run on any computer, anywhere in the world, with no need for the blessing of a government department. Even the money they use is global, open-source and beyond the control of any government: But these doesn’t mean it’s lawless, as most of the centralized agencies would like to whisper to our eyers whenever they get the chance. Like any organization, DAOs can set their own rules on purpose, membership, voting, etc. It is also good practice for a DAO to have a written constitution or founding document so that, if a dispute arises, it can be settled by a Web3 dispute resolution service such as Aragon Court.</p>
                                            <h3>Organization</h3>
                                            <p>Every act of collaboration must have a goal and purpose. We collaborate with our fellow-human to achieve this goal. As human-being, I think we figure out this so early, as we always organized themselves into groups, tribes, squads, gangs, crews, teams, companies, and other forms of collective action to get thing done. In DAO’s
                                                Membership is decided with the aid of possession of some of the DAO's 'token', which is issued on a blockchain like Ethereum and acts lots like a digital membership card, enabling get admission voting right and other. ‘
                                            </p>
                                        </div>

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