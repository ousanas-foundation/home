import { FETCH_BLOG_INFO } from '../actions/blog.actions'
let initailState = []
function blogInfo(state = initailState, action) {
  switch (action.type) {
    case FETCH_BLOG_INFO:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default blogInfo;