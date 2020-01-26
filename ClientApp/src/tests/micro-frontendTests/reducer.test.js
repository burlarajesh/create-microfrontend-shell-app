import { ReceiveSettings } from "../../microfrontend/actions"
import {reducer} from "../../microfrontend/reducers"

describe("micro-frontend reducer",()=>{

    it("should return default state",() =>{
        const newState = reducer(undefined,{})
        expect(newState).toEqual({ appSettings:[] })
    })

    it("Should return new state",()=>{

        const appSettings = [{
            appid:"",
            path:"",
            component:""
        },
        {
            appid:"1",
            path:"2",
            component:"3"
        }
        ]; 

    const newState = reducer(undefined,{
        type: ReceiveSettings,
        appSettings: appSettings
    });

    expect(newState.appSettings).toEqual(appSettings)

})


})
