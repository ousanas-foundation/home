import {data} from '../data/currencyinfo.json'
export const FETCH_CRYPTO_INFO = 'FETCH_CRYPTO_INFO'
export const getAllCryptoInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_CRYPTO_INFO",
        payload: data
      })
    }
}