import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as appSettingsReducer } from '../microfrontend/reducers'

const reducers = {  
    appSettings: appSettingsReducer
};

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });
export default createRootReducer;
