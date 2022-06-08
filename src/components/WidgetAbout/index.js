import React, {Component} from "react"
import { connect } from "react-redux"
import { getAllWidgetAboutInfo } from '../../actions/widgetabout.actions'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 


class WidgetAbout extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllWidgetAboutInfo()
    }
    render(){
        return(
            <div className="widget widget-about">
                {
                    this.props.aboutInfo.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="footer-logo" key={index}>
                                <a href={item.logo[0].url}>
                                    <img src={require(`./../../assets/images/${item.logo[0].image_url}.png`)} alt="logo" />
                                </a>
                            </div>
                            <p className="content">{item.text}</p>
                            <div className="social-area">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    aboutInfo: state.widgetAboutInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllWidgetAboutInfo: bindActionCreators(getAllWidgetAboutInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetAbout);