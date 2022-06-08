import {VIDEO_MODAL_IS_OPEN, VIDEO_MODAL_IS_CLOSE} from '../actions/video.actions'
let initialState = {isOpen: false}
export default function(state = initialState, action) {
    switch (action.type) {
      case VIDEO_MODAL_IS_OPEN:
        return { isOpen: true };
      case VIDEO_MODAL_IS_CLOSE:
        return { isOpen: false };
      default:
        return state;
    }
  }