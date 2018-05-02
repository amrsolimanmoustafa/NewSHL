import {combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import makeOrderReducer from './makeOrderReducer'
import commonServicesReducer from './CommonServicesReducer/commonServicesReducer'
import updateComponentsStateReducer from './UpdateComponentsStateReducer/updateComponentsStateReducer'

export default combineReducers({
    posts :postReducer,
    auth:authReducer,
    makeOrder:makeOrderReducer,
    common:commonServicesReducer,
    compState:updateComponentsStateReducer
})
