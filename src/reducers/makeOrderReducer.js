import {
    GETSERVESIES,
    GET_FAV_LOCS,
    ADD_FAV_LOC,
    CANCEL_ORDER,
    GETSELECTED_SERVICES,
    ORDER_OBJ,
    PROVIDER_INFO,
    RATE_PROVIDER,
    ORDER_ID
} from '../actions/types'
import { favlocationlist } from '../actions/makeOrderAction'

const initialState={
    services: [],
    service: [],
    selectedServices: [],
    order_id: '',
    services_id: '',
    sub_services_id: '',
    user_lat: '',
    user_long: '',
    provider: {
        users: {
            user_name: ''
        }
    },
    favlocationlist: []
}

export default function(state=initialState,action){
    switch(action.type){
        case GETSERVESIES:
            return {
                ...state,
                services: action.payload
            }
        case GETSELECTED_SERVICES:
            return {
                ...state,
                selectedServices: action.payload
            }
        case ORDER_OBJ:
            return {
                ...state,
                services_id: action.payload.services_id?action.payload.services_id:state.services_id,
                sub_services_id: action.payload.sub_services_id?action.payload.sub_services_id:state.sub_services_id,
                user_lat: action.payload.user_lat?action.payload.user_lat:state.user_lat,
                user_long: action.payload.user_long?action.payload.user_long:state.user_long,
            }
        case PROVIDER_INFO:
            return {
                ...state,
                provider: action.payload
            }
        case RATE_PROVIDER:
            return{...state}
        case ORDER_ID:
            return {
                ...state,
                order_id: action.payload
            }
        case CANCEL_ORDER:
            return{...state}
        case GET_FAV_LOCS:
            return {
                ...state,
                favlocationlist: action.payload
            }
        default:
            return state;
    }
};