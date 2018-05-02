import {GETSERVESIES,GETSELECTED_SERVICES} from '../actions/types'
const initialState={
    services:[],
    service:[],selectedServices:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GETSERVESIES:
        return {...state,
            services:action.payload,service:action.payload.data}
            case GETSELECTED_SERVICES:
            return {...state,selectedServices:action.payload}
        default:
        return state;
    }
};
