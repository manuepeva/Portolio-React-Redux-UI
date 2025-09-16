// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { clickOnLogo } from "./LogoEventReducer";
import { sendingFormData } from "./SendFormReducer";

const store = configureStore({
  reducer: {
    clickOnLogo,
    sendingFormData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
