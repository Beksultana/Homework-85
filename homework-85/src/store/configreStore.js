
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from 'history';
import musicReducer from '../store/reducers/musicReducers';
import userReducer from '../store/reducers/usersReducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {saveState, loadState} from "./localStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    musicReducers: musicReducer,
    users: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: {
            user: store.getState().users.user
        }
    });
});

export default store;