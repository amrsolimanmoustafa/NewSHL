import {FETCH_POSTS,LOGIN,ACTIVATION_STATE,REFRESH_PLAYER_ID} from '../actions/types'
const initialState={
    user:[],
    activated_user: [],
    user_phone: '',
    user_id: '',
    token_id: ''
}
export default function(state=initialState,action){
    switch(action.type){
        case LOGIN:
        return {...state,
          user: action.payload,user_phone:action.payload.phone,user_id:action.payload.user_id}
        //   case REFRESH_PLAYER_ID:
        //   return{...state,}
        case ACTIVATION_STATE:
        return{...state,activated_user:action.payload}
        default:
        return state;
    }
};
