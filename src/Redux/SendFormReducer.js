import {
    SEND_FORM
} from './types'

const initialState = {
    sendingFormData: {}
}

export const sendingFormData = (state=initialState, action) => {
    switch(action.type){
        case SEND_FORM:
            return {
                ...state,
                sendingFormData: action.payload
            }
        default:
            return state
    }
}