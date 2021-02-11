import {
    LOGO_CLICK
} from './types'

const initialState = {
    clickLogo: ''
}

export const clickOnLogo = (state = initialState, action) => {
    switch(action.type){
        case LOGO_CLICK:
            return {
                clickLogo: action.payload
            }
            default:
                return state
    }
}

