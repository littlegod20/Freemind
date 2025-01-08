import {configureStore} from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice'

export const store = configureStore({
  // your reducers
  reducer: {
    client: clientReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;