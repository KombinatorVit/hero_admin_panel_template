import {configureStore} from '@reduxjs/toolkit';
import filters from '../components/heroesFilters/filtersSlice';
import {apiSlice} from '../api/apiSlice';


const store = configureStore({
    reducer: {
        filters,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;