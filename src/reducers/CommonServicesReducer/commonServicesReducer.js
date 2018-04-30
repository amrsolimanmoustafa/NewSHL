import {REVERSE_GEOLOCATION,SETCOORDINATES} from '../../actions/types'
const initialState={
    location:'',
    adress:'',
    lng:'',
    lat:'',
   

}
export default function(state=initialState,action){
    switch(action.type){
        case REVERSE_GEOLOCATION:
        console.log('REVERSE_GEOLOCATION dispached : ',action)
        return {...state,
        adress:action.payload.address_components[0]['long_name']}
        case SETCOORDINATES:
        return{...state,lat:action.payload.lat,lng:action.payload.lng}
        default:
        return state;
    }
};
