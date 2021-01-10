
import {createStore, compose} from 'redux';
import initalState from '../initialState'
import {reducer} from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(reducer, initalState, composeEnhancers())

