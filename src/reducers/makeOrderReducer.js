import {GETSERVESIES} from '../actions/types'
const initialState={
    services:[],
    service:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GETSERVESIES:
        return {...state,
            services:action.payload,service:action.payload.data}
        default:
        return state;
    }
};
