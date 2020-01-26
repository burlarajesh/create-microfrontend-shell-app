
import  MicroFrontend  from '../../microfrontend/micro-frontend'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';

configure({adapter: new Adapter()});
describe('rendering Micro FrontEnd',() =>{

let wrapper;

    it('renders policy enzyme', () => {
        const props ={
            AppId:"Policy",
            name:"Policy",
            host :"https://dummystrorage/policy.js"
        }
       wrapper = mount(<MicroFrontend  appConfig= {props} />,{ attachTo: document.body })
         expect(document.getElementById(`${props.AppId}-container`)!=null).toBeTruthy()
      })

      it('renders Claims enzyme', () => {
        const props ={
            AppId:"Claims",
            name:"Claims",
            host :"https://dummystrorage/claims.js",
        }
        wrapper = mount(<MicroFrontend  appConfig= {props} />,{ attachTo: document.body })
         expect(document.getElementById("Claims-container")!=null).toBeTruthy()
      })
})