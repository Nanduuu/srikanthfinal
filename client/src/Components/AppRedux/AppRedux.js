
import RootReducer from './RootReducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Mysage from './MySaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer ,composeWithDevTools(
  											applyMiddleware(sagaMiddleware)));

sagaMiddleware.run( Mysage)


export default  store ;