import { ReceiveSettings } from "./actions"

const initialState = { appSettings:[] }

export function reducer(state, action) {
    state = state || initialState;
    switch (action.type) {
        case ReceiveSettings: return Object.assign({}, state, { appSettings: action.appSettings })
        default: return state;
    }
}