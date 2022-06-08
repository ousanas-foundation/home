import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Price = (props) => {
    return(
        <div className="price-table">
            <div className="price-content">
                <h3 className="bit-info">{props.data.label}</h3>
                <span>{props.data.text}</span>
                <div className="price"><FontAwesomeIcon icon={props.currency} />{props.data.price}</div>
            </div>
            <a className="btn btn-white-shadow" href={props.data.button_link}>{props.data.button_text}</a>
        </div>
    )
}
export default Price