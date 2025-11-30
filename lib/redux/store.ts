import { configureStore } from '@reduxjs/toolkit';
import { ReduxApi } from '../services/api';
import { FormApi } from "../services/formApi"

export const makeStore = () => {
    return configureStore({
        reducer: {
            [ReduxApi.reducerPath]: ReduxApi.reducer,
            [FormApi.reducerPath]: FormApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ReduxApi.middleware).concat(FormApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];