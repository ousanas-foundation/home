import React, {Component} from "react"
import { connect } from "react-redux"
import Slider from "react-slick"
import { getAllFocusInfo } from '../../actions/focusInfo.actions'
import FocusShowCase from '../FocusShowCase'
import { bindActionCreators } from 'redux'

class OurArea extends Component {
   constructor(){
     super();
   }
   componentDidMount(){
    this.props.getAllFocusInfo();
   }
  

   
   render(){
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="crypto-carousel">
        <Slider {...settings}>
            {
              this.props.cryptoInfo.map( (item, index) => <div key={index}><FocusShowCase item={item} /></div>)
            }
        </Slider>
      </div>
    )
   }
}


const mapStateToProps = state => ({
  cryptoInfo: state.cryptoInfo
});

const mapDispatchToProps = dispatch => {
  return {
    getAllFocusInfo: bindActionCreators(getAllFocusInfo, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OurArea);