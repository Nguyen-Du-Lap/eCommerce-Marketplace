import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// create the root reducer
const rootReducer = combineReducers({
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {},
        }),
    },
)

export type IRootState = ReturnType<typeof store.getState>;