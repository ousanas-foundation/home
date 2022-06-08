import {data} from '../data/price.json'
export const FETCH_PRICE_INFO = 'FETCH_PRICE_INFO'
export const getAllPriceInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_PRICE_INFO",
        payload: data
      })
    }
}