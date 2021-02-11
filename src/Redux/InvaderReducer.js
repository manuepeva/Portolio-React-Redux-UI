import {
    SHOOT_INVADERS,
} from './types'

const initialState = {
    waterRun: '',
    error: null
}

export const waterFlow = (state = initialState, action) =>  {
    switch(action.type){
        case SHOOT_INVADERS:
            return {
                waterRun: action.payload
            }
        default:
            return state
    }
}