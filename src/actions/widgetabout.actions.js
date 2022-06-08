import {data} from '../data/widgetabout.json'
export const FETCH_WIDGET_ABOUT_INFO = 'FETCH_WIDGET_ABOUT_INFO'
export const getAllWidgetAboutInfo = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_WIDGET_ABOUT_INFO",
        payload: data
      })
    }
}