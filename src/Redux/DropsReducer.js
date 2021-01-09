import {
    LET_WATER_RUN,
    STOP_WATER
} from './types'

const initialState = {
    waterRun: '',
    error: null
}

export const waterFlow = (state = initialState, action) =>  {
    switch(action.type){
        case LET_WATER_RUN:
            return {
                waterRun: action.payload
            }
        default:
            return state
    }
}