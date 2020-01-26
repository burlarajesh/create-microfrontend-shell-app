import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { readAppSettings} from '../../microfrontend/actions'
import createRootReducer from '../../store/rootReducers'


 const middlewares = [thunk];

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(createRootReducer({}), initialState);
};


describe('micro-frontend-actions',() =>{
 
    it('store is updated correctly',()=>{

  const appsetting =  document.createElement("INPUT");
      appsetting.setAttribute("id","appSettings")
      appsetting.value = "{\"abc\":\"abc\"}";
       document.body.appendChild(appsetting);
        const store = testStore();
    store.dispatch(readAppSettings())
    const newState = store.getState()
    expect(newState.appSettings.appSettings.abc).toBe("abc")
    })
})