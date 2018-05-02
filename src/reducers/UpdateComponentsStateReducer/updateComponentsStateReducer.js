import {COMPONENT_ENTER} from '../../actions/types'
const initialState={
    __CurrentComponent:'',
}
export default function(state=initialState,action){
    switch(action.type){
        case COMPONENT_ENTER:
        console.log('COMPONENT_ENTER dispached : ',action)
        return {...state,__CurrentComponent:action.payload}
        default:
        return state;
    }
};
