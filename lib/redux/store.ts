import { configureStore } from '@reduxjs/toolkit';
import { ReduxApi } from '../services/api';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [ReduxApi.reducerPath]: ReduxApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ReduxApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];