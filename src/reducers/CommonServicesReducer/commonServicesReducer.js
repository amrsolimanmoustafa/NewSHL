import {REVERSE_GEOLOCATION,SETCOORDINATES,SET_DRIVER_COORDINATES} from '../../actions/types'
const initialState={
    location:'',
    adress:'',
    lng:'',
    lat:'',driverLat:'',driverLng:''
   

}
export default function(state=initialState,action){
    switch(action.type){
        case REVERSE_GEOLOCATION:
        console.log('REVERSE_GEOLOCATION dispached : ',action)
        return {...state,
        adress:action.payload}
        case SETCOORDINATES:
        console.log('SETCOORDINATES dispached : ',action)

        return{...state,lat:action.payload.lat,lng:action.payload.lng}
        case SET_DRIVER_COORDINATES:
        console.log('SETCOORDINATES dispached : ',action)

        return{...state,driverLat:action.payload.driverLat,driverLng:action.payload.driverLng}
        default:
        return state;
    }
};
