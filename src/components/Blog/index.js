import React, {Component} from 'react'
import { Col } from 'react-bootstrap'
import { connect } from "react-redux"
import Link from 'next/link'
import { getAllBlogInfo } from '../../actions/blog.actions'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

class Blog extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllBlogInfo()
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.blogInfo.map( (item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="blog-post">
                                <div className="entry-thumbnail">
                                    <img src={require(`./../../assets/images/blog/${item.img}.png`)} className="img-responsive" alt="blog" />
                                </div>
                                <div className="post-details">
                                    <h3 className="title">
                                        <Link href={{ pathname: '/post', query: { id: item.id } }}>
                                            <a>{item.label}</a>
                                        </Link>
                                    </h3>
                                    <div className="entry-meta">
                                        <span><a href="#"><FontAwesomeIcon icon={faUser} />{item.author}</a></span>
                                        <span><FontAwesomeIcon icon={faCalendar} />{item.post_date}</span>
                                    </div>
                                    <p>{item.text}</p>
                                    <Link href={{ pathname: '/post', query: { id: item.id } }}>
										<a className="btn btn-white-shadow">Read More</a>
									</Link>
                                </div>
                            </div>
                        </Col>	
                    ))
                }
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    blogInfo: state.blogInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllBlogInfo: bindActionCreators(getAllBlogInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);