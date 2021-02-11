import {
    LOGO_CLICK
} from './types'
import {history} from './store'

export const clickOverLogo = (link) => (dispatch) => {
    dispatch({
        type: LOGO_CLICK,
        payload: link
    })
    history.push('/')
    window.location.reload()
}
