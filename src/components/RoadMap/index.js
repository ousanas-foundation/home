import React, {Component} from 'react'
import { connect } from "react-redux"
import { getAllRoadMapInfo } from '../../actions/roadmap.actions'
import { bindActionCreators } from 'redux'

class RoadMap extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllRoadMapInfo()
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.roadMapInfo.map( (item, index) => (
                        <div className={(item.isBottom == true) ? 'single-map' : 'single-map single-map-2'} key={index}>
                            <div className="icons">
                                <img src={require(`./../../assets/images/icons/${item.img}.png`)} alt="road" />
                            </div>
                            <div className={`bars mbg-${item.color}`}></div>
                            <div className="details">
                                <h3 className="title">{item.label}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
             </ React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    roadMapInfo: state.roadMapInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllRoadMapInfo: bindActionCreators(getAllRoadMapInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoadMap);