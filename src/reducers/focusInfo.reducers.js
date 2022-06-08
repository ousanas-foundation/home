import { FETCH_CRYPTO_INFO } from '../actions/focusInfo.actions'
let initailState = []
function cryptoInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_CRYPTO_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default cryptoInfo;