import {
    LET_WATER_RUN,
    STOP_WATER
} from './types'
import { dispatch } from 'react-redux'


export const runWater = () => (dispatch) => {
    dispatch({
        type: LET_WATER_RUN
    })
}