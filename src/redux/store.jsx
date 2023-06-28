import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contatctsSlice';
import { filterReducer } from './filterSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contactsList',
    storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);
export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor  = persistStore(store);
