import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadJobReducer } from './reducers/jobReducers';

//combine reducers
const reducers = combineReducers({
    loadJobs : loadJobReducer

});

//staring state

let initialState = {};
const middleware = [thunk];
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store; 