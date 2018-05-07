import {FETCH_POSTS,LOGIN} from '../actions/types'
const initialState={
    user:[],
    user_phone:'',
    user_id:''
}
export default function(state=initialState,action){
    switch(action.type){
        case LOGIN:
        return {...state,
          user:action.payload,user_phone:action.payload.data.phone,user_id:action.payload.data.user_id}
        default:
        return state;
    }
};
