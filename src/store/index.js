
import {configureStore} from "@reduxjs/toolkit";

import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';

//
// const store = createStore(
//     combineReducers({heroes, filters}),
//     applyMiddleware(ReduxThunk));

const store = configureStore({
    reducer: {
        heroes, filters
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;