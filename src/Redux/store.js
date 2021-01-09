import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {waterFlow} from './DropsReducer'

const initialState = {}
const reduxStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(combineReducers({
    waterFlow: waterFlow
}), 
    initialState,
    reduxStore(applyMiddleware(thunk))
)
export default store
