import {GETSERVESIES,GETSELECTED_SERVICES,ORDER_OBJ} from '../actions/types'
const initialState={
    services:[],
    service:[],selectedServices:[],

    services_id:'',sub_services_id:'',user_lat:'',user_long:''
}

export default function(state=initialState,action){
   console.log(action.payload)
    switch(action.type){
        case GETSERVESIES:
        return {...state,
            services:action.payload,service:action.payload.data}
            case GETSELECTED_SERVICES:
            return {...state,selectedServices:action.payload}
case ORDER_OBJ:
return {...state
    ,services_id:action.payload.services_id?action.payload.services_id:state.services_id
    ,sub_services_id:action.payload.sub_services_id?action.payload.sub_services_id:state.sub_services_id
    ,user_lat:action.payload.user_lat?action.payload.user_lat:state.user_lat
    ,user_long:action.payload.user_long?action.payload.user_long:state.user_long
}
        default:
        return state;
    }
};
