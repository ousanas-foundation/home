import { FETCH_WIDGET_ABOUT_INFO } from '../actions/widgetabout.actions'
let initailState = []
function widgetAboutInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_WIDGET_ABOUT_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default widgetAboutInfo;