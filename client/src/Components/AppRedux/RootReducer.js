import { combineReducers } from 'redux'
import LoginReducers from './LoginReducers';
import TechnologyReducer from './TechnologyReducer';


const rootReducer = combineReducers({

  LoginReducers:  LoginReducers,
  TechnologyReducer : TechnologyReducer
    
})


export default rootReducer;