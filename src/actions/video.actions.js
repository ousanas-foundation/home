export const VIDEO_MODAL_IS_OPEN = "VIDEO_MODAL_IS_OPEN"
export const VIDEO_MODAL_IS_CLOSE = "VIDEO_MODAL_IS_CLOSE"
export function openVideoModal(){
    return function(dispatch){
        dispatch({ type: 'VIDEO_MODAL_IS_OPEN' })
    }
}
export function closeVideoModal(){
    return function(dispatch){
        dispatch({ type: 'VIDEO_MODAL_IS_CLOSE' })
    }
}