import {
    SHOOT_INVADERS,
} from './types'


export const runWater = () => (dispatch) => {
    dispatch({
        type: SHOOT_INVADERS
    })
}