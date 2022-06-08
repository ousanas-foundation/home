import {data} from '../data/focusinfo.json'
export const FETCH_CRYPTO_INFO = 'FETCH_CRYPTO_INFO'
export const getAllFocusInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_CRYPTO_INFO",
        payload: data
      })
    }
}