import {data} from '../data/partner.json'
export const FETCH_PARTNER_INFO = 'FETCH_PARTNER_INFO'
export const getAllPartnerInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_PARTNER_INFO",
        payload: data
      })
    }
}