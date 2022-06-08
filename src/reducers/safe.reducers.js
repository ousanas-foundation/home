import { FETCH_SAFE_INFO } from '../actions/safe.actions'
let initailState = []
function safeInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_SAFE_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default safeInfo;