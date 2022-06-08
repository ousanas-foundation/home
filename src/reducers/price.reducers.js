import { FETCH_PRICE_INFO } from '../actions/price.actions'
let initailState = []
function priceInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_PRICE_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default priceInfo;