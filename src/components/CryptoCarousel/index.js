import React, {Component} from "react"
import { connect } from "react-redux"
import Slider from "react-slick"
import { getAllCryptoInfo } from '../../actions/cryptoInfo.actions'
import ExchangeRate from '../../components/ExchangeRate'
import { bindActionCreators } from 'redux'

class CryptoCarousel extends Component {
   constructor(){
     super();
   }
   componentDidMount(){
    this.props.getAllCryptoInfo();
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
              this.props.cryptoInfo.map( (item, index) => <div key={index}><ExchangeRate item={item} /></div>)
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
    getAllCryptoInfo: bindActionCreators(getAllCryptoInfo, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoCarousel);