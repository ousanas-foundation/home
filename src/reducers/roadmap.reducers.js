import { FETCH_ROADMAP_INFO } from '../actions/roadmap.actions'
let initailState = []
function roadMapInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_ROADMAP_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default roadMapInfo;