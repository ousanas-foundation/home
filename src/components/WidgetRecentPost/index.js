import React from 'react'
import Link from 'next/link'
import { connect } from "react-redux"

const WidgetRecentPost = (props) => {
    let min = (props.min ? props.min : 0);
    let max = (props.max ? props.max : 3);
    return(
        <div className="widget widget_recent-post">
            <div className="widget-title">
                <h3 className="title">{props.title}</h3>
            </div>
            <React.Fragment>
                {
                    props.blogInfo.slice(min, max).map((item, index) => (
                        <div className="media" key={index}>
                            <div className="media-left">
                                <a href="#">
                                    <img src={require(`./../../assets/images/blog/small/${item.img}.png`)} alt="image" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="title">
                                    <Link href={{ pathname: '/post', query: { id: item.id } }}>
										<a>{item.label}</a>
									</Link>
                                </h4>
                                <p>{item.post_date}</p>
                            </div>
                        </div>
                    ))
                }		
            </React.Fragment>		
        </div>
    )
}


const mapStateToProps = state => ({
    blogInfo: state.blogInfo
});
export default connect(mapStateToProps, null)(WidgetRecentPost);