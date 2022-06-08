import React, {Component} from 'react'
import Slider from "react-slick"
import { connect } from "react-redux"
import { getAllPartnerInfo } from '../../actions/partner.actions'
import { bindActionCreators } from 'redux'

class PartnerCarousel extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllPartnerInfo()
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
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return(
            <div className="partner-slider">
                <Slider {...settings}>
                {
                    this.props.partnerInfo.map( (item, index) => (
                        <div className="item" key={index}>
                            <div className="logo-area">
                                <a href={item.url}><img src={require(`./../../assets/images/partner/${item.img}.png`)} alt="image" /></a>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    partnerInfo: state.partnerInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllPartnerInfo: bindActionCreators(getAllPartnerInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerCarousel);