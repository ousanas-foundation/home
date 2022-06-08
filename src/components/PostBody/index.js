import React from 'react'
import SocialShare from '../SocialShare'
import Tags from '../Tags'
import Disqus from 'disqus-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faComments, faHeart } from '@fortawesome/free-solid-svg-icons'

const PostBody = (props) => {
    const disqusShortname = 'example';
    const disqusConfig = {
        url: '#',
        identifier: 20,
        title: 'lorem-ipsum-dolor',
    };
    return(
        <React.Fragment>
            <div className="post-thumb">
                <img src={require(`./../../assets/images/blog/big/${props.data[0].img}.jpg`)} className="img-responsive" alt="image" />
            </div>
            <div className="meta-post">
                <ul className="meta-tag">
                    <li className="date"><FontAwesomeIcon icon={faCalendar} />{props.data[0].post_date}<span>|</span></li>
                    <li className="admin"><a href="#"><FontAwesomeIcon icon={faUser} />{props.data[0].author}</a><span>|</span></li>
                    <li className="commets"><FontAwesomeIcon icon={faComments} />5<span>|</span></li>
                    <li className="ratting"><FontAwesomeIcon icon={faHeart} />15</li>
                </ul>
            </div>				
            <div className="entry-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna is aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. the dolor sit amet posuere eiusmodInteger posuere erat a ante.</p>
                </blockquote>				
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            </div>
            <div className="post-share-tag">
                <span className="blog-post-share">
                    <span className="title">Share to:</span>
                <SocialShare />
                </span>
                <span className="tag">
                    <span className="title">Tag :</span>
                    <Tags />
                </span>
            </div>
            <div className="comments-area">
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />      
            </div>

        </React.Fragment>
    )
}
export default PostBody;