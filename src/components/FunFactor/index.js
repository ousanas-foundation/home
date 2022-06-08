import React, {Component} from 'react'
import { Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getAllFunFactorInfo } from '../../actions/funfactor.actions'
import { bindActionCreators } from 'redux'

class FunFactor extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllFunFactorInfo()
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.funfactorInfo.map( (item, index) => (
                        <Col lg={3} md={6} className="text-center" key={index}>
                            <div className="single-fact">
                                <div className="icon">
                                    <img src={require(`./../../assets/images/icons/${item.img}.png`)} alt="icon" />
                                </div>    
                                <h2 className="title fact-count">{item.count}</h2>
                                <h3 className="sub-title">{item.label}</h3>
                            </div>
                        </Col>	
                    ))
                }
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    funfactorInfo: state.funfactorInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllFunFactorInfo: bindActionCreators(getAllFunFactorInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunFactor);