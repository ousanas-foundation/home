import { FETCH_TEAM_INFO } from '../actions/team.actions'
let initailState = []
function teamInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_TEAM_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default teamInfo;