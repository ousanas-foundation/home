import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllBlogInfo } from '../src/actions/blog.actions'
import { bindActionCreators } from 'redux'
import Sidebar from '../src/components/Sidebar'
import MainLayout from '../src/components/Layout'
import InnerPageSection from '../src/containers/InnerPageSection'
import PostBody from '../src/components/PostBody'
import FooterSection from '../src/containers/FooterSection'

class Post extends Component {
    constructor({query}){
        super()
        
    }
    componentDidMount(){
        this.props.getAllBlogInfo()
    }
    
    render(){
        let blogPost = this.props.blogInfo.filter(item => {
            return item.id == this.props.query.id;
        });
        let blogContent;
        if(blogPost.length){
            blogContent = <PostBody data={blogPost} />
        }
        return(
            <MainLayout>
                <InnerPageSection title="Blog" />
                <div className="single-blog-section">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                {
                                    blogContent
                                }  
                            </Col>
                            <Col lg={{span: 3, offset: 1}} className="mg-bottom-100">
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

Post.getInitialProps = ({query}) => {
  return {query};
};

const mapStateToProps = state => ({
    blogInfo: state.blogInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllBlogInfo: bindActionCreators(getAllBlogInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);