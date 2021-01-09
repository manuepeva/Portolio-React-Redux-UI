import React from 'react'
import Drops from './Drops/Drops'
import {runWater} from '../../Redux/DropsActions'
import {useDispatch, useSelector} from 'react-redux'
import {move} from './Drops/Drops'

const ReduxCom = () => {
    const dispatch = useDispatch()
    const DropsRunnning = () => dispatch(runWater())
    // when button pressed
    const letWaterRun = e => {
        e.preventDefault()
        DropsRunnning()
        // move()
    }
    return (
        <div className="reduxImg">
            <div className="row reduxRows">
                <div className="column">
                    <div className="drops-js">
                        <Drops />
                    </div>
                </div>
                <div className="column">
                    redux letters
                </div>
            </div>
            <div className="row btn-container reduxRows">
                    <button className="btn-redux" onClick={letWaterRun} type="button">Let Rain</button>
            </div>
        </div>
    )
}

export default ReduxCom
