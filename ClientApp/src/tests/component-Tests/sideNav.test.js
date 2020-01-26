
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';
import SideNav from '../../components/common/sidenav/SideNav'
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import createRootReducer from '../../store/rootReducers'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';

configure({adapter: new Adapter()});

const middlewares = [thunk];

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(createRootReducer({}), initialState);
};



describe('Side Nav Bar',() =>{

    
    it('should create links for all micro front end',()=>{

      const appsetting =  document.createElement("INPUT");
      appsetting.setAttribute("id","appSettings")
      appsetting.value = "[{\"AppId\":\"Policy\",\"DisplayName\":\"Policy\",\"Path\":\"policy\",\"host\":\"policyjs\"},{\"AppId\":\"Claims\",\"DisplayName\":\"Claims\",\"Path\":\"claims\",\"host\":\"claimsjs\"}]";
      document.body.appendChild(appsetting);

        const initialState = {
            appSettings :{
                appSettings:[{
                    name:"Policy",
                    Path:'/policy',
                    host :"https://dummystrorage/policy.js"
                },{
                    name:"Claims",
                    Path:'/claims',
                    host :"https://dummystrorage/claims.js"
                }]
            }
        }
         const store = testStore(initialState)
        const root = document.createElement('div');
        document.body.appendChild(root);

         ReactDOM.render(
            <MemoryRouter    >
                <SideNav  store={store} />
            </MemoryRouter>,root
        )
              expect(document.getElementsByClassName('list-group-flush list-group')[0].getElementsByTagName('a')[0].href).toBe("http://localhost/policy")
             
              expect(document.getElementsByClassName('list-group-flush list-group')[1].getElementsByTagName('a')[1].href).toBe("http://localhost/claims")
    })
})