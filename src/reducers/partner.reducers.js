import { FETCH_PARTNER_INFO } from '../actions/partner.actions'
let initailState = []
function partnerInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_PARTNER_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default partnerInfo;