import {data} from '../data/funfactor.json'
export const FETCH_FUNFACTOR_INFO = 'FETCH_FUNFACTOR_INFO'
export const getAllFunFactorInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_FUNFACTOR_INFO",
        payload: data
      })
    }
}