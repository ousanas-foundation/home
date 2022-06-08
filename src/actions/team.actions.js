import {data} from '../data/team.json'
export const FETCH_TEAM_INFO = 'FETCH_TEAM_INFO'
export const getAllTeamInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_TEAM_INFO",
        payload: data
      })
    }
}