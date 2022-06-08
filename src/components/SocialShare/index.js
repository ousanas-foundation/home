import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

const SocialShare = () => {
    return(
        <React.Fragment>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </React.Fragment>
    )
}
export default SocialShare