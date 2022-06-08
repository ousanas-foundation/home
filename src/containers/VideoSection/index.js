import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import { connect } from "react-redux";
import {openVideoModal, closeVideoModal} from '../../actions/video.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const VideoSection = ({ isOpen, openVideoModal, closeVideoModal  }) => {
    return(
        <div className="video-section text-center">
            <Container>
                <Row>
                    <Col md={12}>
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='L61p2uyiMSo' onClose={closeVideoModal} />
                        <button onClick={openVideoModal} className="btn-video play-video">
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <h2 className="title">Review with Video</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore the aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat.</p>
                    </Col>
                </Row>
            </Container>
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
  )(VideoSection); 