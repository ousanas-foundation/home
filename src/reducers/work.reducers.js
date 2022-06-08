import { FETCH_WORK_INFO } from '../actions/work.actions'
let initailState = []
function workInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_WORK_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default workInfo;