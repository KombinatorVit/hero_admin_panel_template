import heroes from '../reducers/heroes';
import filters from '../reducers/filters';
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        heroes, filters
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;