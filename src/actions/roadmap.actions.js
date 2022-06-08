import {data} from '../data/roadmap.json'
export const FETCH_ROADMAP_INFO = 'FETCH_ROADMAP_INFO'
export const getAllRoadMapInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_ROADMAP_INFO",
        payload: data
      })
    }
}