import { combineReducers, compose, applyMiddleware, legacy_createStore} from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = legacy_createStore(combineReducers({heroes, filters}),
    compose(applyMiddleware(stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;