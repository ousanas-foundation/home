import React from "react";
function ExchangeRate(props) {
    return (
     <div className="exchange-rate-single">
         <div className="title-wrap">
            <div className="icons">
                <img width={'75px'} height={'75px'} src={require(`./../../assets/images/info/${props.item.img}.png`)} alt="image" />
            </div>
            
        </div>
        <div className="title">
                {props.item.label.split("/")[0]}
            </div>
        <h3 className="sub-title">{props.item.description}</h3>
     </div>
    );
}
export default ExchangeRate;