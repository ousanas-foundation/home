import {data} from '../data/futures.json'
export const FETCH_FEATURES_INFO = 'FETCH_FEATURES_INFO'
export const getAllFeaturesInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_FEATURES_INFO",
        payload: data
      })
    }
}