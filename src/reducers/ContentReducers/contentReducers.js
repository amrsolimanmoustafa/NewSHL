import {GET_NOTIFICATIONS,GET_COSTS,TERMS,ABOUT_APP} from '../../actions/types'
const initialState={
notifications:[],
servicesCost:[],
terms:'',
aboutApp:''
}
export default function(state=initialState,action){
    console.log('action entered',action.payload)

    switch(action.type){
        case GET_NOTIFICATIONS:
        return {...state,notifications:action.payload}
        case GET_COSTS:
        return{...state,servicesCost:action.payload}
        case TERMS:
        console.log('terms dispached',action.payload)
        return{...state,terms:action.payload}
        case ABOUT_APP:

        return{...state,aboutApp:action.payload.data}

        default:
        return state;
    }
};
