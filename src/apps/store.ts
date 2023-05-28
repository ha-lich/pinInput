import { configureStore } from '@reduxjs/toolkit';
import { authServiceApi } from './services/authService';
import authSliceReducer from './slices/authSlice';
import { pinServiceApi } from './services/pinService';

export const store = configureStore({
  reducer: {
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    auth: authSliceReducer,
    [pinServiceApi.reducerPath]: pinServiceApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authServiceApi.middleware)
      .concat(pinServiceApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
