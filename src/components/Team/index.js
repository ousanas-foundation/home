import React, {Component} from "react"
import { connect } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import { getAllTeamInfo } from '../../actions/team.actions'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

class Team extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllTeamInfo()
    }
    render(){
        return(
            <Row>
                {
                    this.props.teamInfo.map( (item, index) => (
                        <Col lg={3} md={6} key={index}>
                            <div className="team-single">
                                <div className="entry-thumbnail">
                                    <div className="team-overlay"></div>
                                    <img src={require(`./../../assets/images/team/${item.img}`)} className="img-responsive" alt="Team" />
                                </div>
                                <div className="entry-social">
                                    <a href={item.facebook}><span><FontAwesomeIcon icon={faFacebookF} /></span></a>
                                    <a href={item.twitter}><span><FontAwesomeIcon icon={faTwitter} /></span></a>
                                    <a href={item.pinterest}><span><FontAwesomeIcon icon={faPinterestP} /></span></a>
                                    <a href={item.tumblr}><span><FontAwesomeIcon icon={faLinkedinIn} /></span></a>
                                </div>
                                <div className="entry-content">
                                    <h3 className="entry-title"><a href="#">{item.label}</a></h3>
                                    <p className="entry-designation">{item.degination}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}


const mapStateToProps = state => ({
    teamInfo: state.teamInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllTeamInfo: bindActionCreators(getAllTeamInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);