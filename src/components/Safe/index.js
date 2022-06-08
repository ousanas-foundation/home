import React, {Component} from "react"
import { connect } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import { getAllSafeInfo } from '../../actions/safe.actions'
import { bindActionCreators } from 'redux'

class Safe extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllSafeInfo()
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.safeInfo.map( (item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className={"safe-factor safe-factor-" + (index + 1)}>
                                <div className="icon">
                                    <img src={require(`./../../assets/images/icons/${item.img}.png`)} alt="safe" />
                                </div>
                                <div className="safe-factor-details">
                                    <h4 className="title">{item.label}</h4>
                                    <p className="content">{item.text}</p>	
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
    safeInfo: state.safeInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllSafeInfo: bindActionCreators(getAllSafeInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Safe);