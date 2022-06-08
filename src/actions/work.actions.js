import {data} from '../data/work.json'
export const FETCH_WORK_INFO = 'FETCH_WORK_INFO'
export const getAllWorkInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_WORK_INFO",
        payload: data
      })
    }
}