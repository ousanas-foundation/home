import {data} from '../data/safe.json'
export const FETCH_SAFE_INFO = 'FETCH_SAFE_INFO'
export const getAllSafeInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_SAFE_INFO",
        payload: data
      })
    }
}