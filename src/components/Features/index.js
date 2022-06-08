import React, {Component} from 'react'
import { Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllFeaturesInfo } from '../../actions/features.actions'
import { bindActionCreators } from 'redux'

class Features extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllFeaturesInfo()
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.featuresInfo.map( (item, index) => (
                        <Col lg={4} md={6} className="text-center" key={index}>
                            <div className="single-element">
                                <div className="thumb">
                                    <img src={require(`./../../assets/images/icons/${item.img}.png`)} alt="icon" />
                                </div>
                                <h4 className="entry-title"><a href="#">{item.label}</a></h4>
                                <p>{item.text}</p>
                            </div>
                        </Col>	
                    ))
                }
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    featuresInfo: state.featuresInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllFeaturesInfo: bindActionCreators(getAllFeaturesInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);