import React from "react";
function ExchangeRate(props) {
    return (
     <div className="exchange-rate-single">
         <div className="title-wrap">
            <div className="icons">
                <img src={require(`./../../assets/images/info/${props.item.img}.png`)} alt="image" />
            </div>
            <div className="title">
                {props.item.label.split("/")[0]} <span>/ {props.item.label.split("/")[1]}</span>
            </div>
        </div>
        <h3 className="sub-title">({props.item.average}%)<i className="fa fa-long-arrow-up"></i></h3>
        <a className="btn btn-white-shadow-2" href="#">{props.item.rate} {props.item.label.split("/")[0]}</a>
     </div>
    );
}
export default ExchangeRate;