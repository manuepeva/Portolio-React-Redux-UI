import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { waterFlow } from "./InvaderReducer";
import { clickOnLogo } from "./LogoEventReducer";
import { connectRouter } from "connected-react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { sendingFormData } from "./SendFormReducer";

export const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    waterFlow: waterFlow,
    clickOnLogo: clickOnLogo,
    sendingFormData: sendingFormData,
    router: connectRouter(history),
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
