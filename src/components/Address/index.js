import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Address = () => {
    return(
        <div className="address-sec">
            <h3 className="title">Primary Contacts</h3>
            <p className="home">San Francisso, 13 Ave. Street, Twin Peaks New Yourk city</p>
            <div className="phone">
                <FontAwesomeIcon icon={faPhoneAlt} />+880 123 456 7823	
            </div>
            <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />info@craft.com
            </div>
            <a className="btn btn-white-shadow launch-map" href="#popupmodal" data-toggle="modal">
                Find Us<FontAwesomeIcon icon={faMapMarker} />
            </a>
        </div>
    )
}
export default Address