import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// Slice's
import { mainSlice } from "./slices/mainSlice";

// Главный редьюсер
const rootReducer = combineReducers({
    main: mainSlice
});

// Промежуточное ПО
const middleware = getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: false,
})

export const store = configureStore({
    // Главный редьюсер
    reducer: rootReducer,
    // Промежуточное ПО
    middleware: middleware,
})