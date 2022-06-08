import {data} from '../data/blog.json'
export const FETCH_BLOG_INFO = 'FETCH_BLOG_INFO'
export const getAllBlogInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_BLOG_INFO",
        payload: data
      })
    }
}