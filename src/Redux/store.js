import {configureStore} from '@reduxjs/toolkit';
 import userReducer from "./Slice/Slice";

const store = configureStore({
  reducer: userReducer,
  
});

export default store;


