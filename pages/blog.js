import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../src/components/Sidebar'
import Link from 'next/link'
import { Pagination } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllBlogInfo } from '../src/actions/blog.actions'
import { bindActionCreators } from 'redux'
import MainLayout from '../src/components/Layout'
import InnerPageSection from '../src/containers/InnerPageSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faComments, faHeart } from '@fortawesome/free-solid-svg-icons'

import FooterSection from '../src/containers/FooterSection'

class blog extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getAllBlogInfo()
    }
    render() {
        return (
            <MainLayout>
                <InnerPageSection title="Blog" />
                <div className="main-blog-section">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                {
                                    this.props.blogInfo.map((item, index) => (
                                        <div className="single-post" key={index}>
                                            <div className="entry-thum">
                                                <img src={require(`./../src/assets/images/blog/big/${item.img}.jpg`)} alt="blog" />
                                            </div>
                                            <div className="post-details">
                                                <div className="entry-title">
                                                    <h3>
                                                        <Link href={{ pathname: '/post', query: { id: item.id } }}>
                                                            <a>{item.label}</a>
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="meta-post">
                                                    <ul className="meta-tag">
                                                        <li className="date"><FontAwesomeIcon icon={faCalendar} />{item.post_date}<span>|</span></li>
                                                        <li className="admin"><a href="#"><FontAwesomeIcon icon={faUser} />{item.author}</a><span>|</span></li>
                                                        <li className="commets"><FontAwesomeIcon icon={faComments} />5<span>|</span></li>
                                                        <li className="ratting"><FontAwesomeIcon icon={faHeart} />15</li>
                                                    </ul>
                                                </div>
                                                <p className="entry-content">{item.text}</p>
                                                <Link href={{ pathname: '/post', query: { id: item.id } }}>
                                                    <a className="btn btn-white-shadow">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="text-center mg-bottom-70">
                                    <Pagination className="page-navigation">
                                        <Pagination.First />
                                        <Pagination.Item>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{5}</Pagination.Item>
                                        <Pagination.Last />
                                    </Pagination>
                                </div>
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className="mg-bottom-100">
                                <Sidebar />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <FooterSection />
            </MainLayout>
        )
    }
}

blog.getInitialProps = () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(blog);