import { FETCH_FUNFACTOR_INFO } from '../actions/funfactor.actions'
let initailState = []
function funfactorInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_FUNFACTOR_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default funfactorInfo;