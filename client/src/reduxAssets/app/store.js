import { configureStore } from '@reduxjs/toolkit';
import { alpacaRegisterReducer, dataFetcherReducer } from '../features/AlpacaReducer';



export const store = configureStore({
    reducer: {
        AlpacaReducer: dataFetcherReducer,
        NewAlpacaReducer: alpacaRegisterReducer,
    },
});
