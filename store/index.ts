import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer, persistStore } from 'redux-persist';

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: number) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["cart"],
};

// create the root reducer
const rootReducer = combineReducers({
    cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],

            },
        }),
},
)

// set the persisted reducer to the store
export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;