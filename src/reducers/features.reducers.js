import { FETCH_FEATURES_INFO } from '../actions/features.actions'
let initailState = []
function featuresInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_FEATURES_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default featuresInfo;