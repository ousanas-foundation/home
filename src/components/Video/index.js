import React from 'react'
import ModalVideo from 'react-modal-video'
import { connect } from "react-redux";
import {openVideoModal, closeVideoModal} from '../../actions/video.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
function Video ({ isOpen, openVideoModal, closeVideoModal  }) {
    return (
        <div className="about-video">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='q7RjosT71SA' onClose={closeVideoModal} />
            <button onClick={openVideoModal} className="btn-video play-video">
                <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    isOpen: state.videoReducer.isOpen
})

const mapDispatchToProps = dispatch => ({
    openVideoModal: () => dispatch(openVideoModal()),
    closeVideoModal: () => dispatch(closeVideoModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Video); 
