import {combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import makeOrderReducer from './makeOrderReducer'
import commonServicesReducer from './CommonServicesReducer/commonServicesReducer'
import updateComponentsStateReducer from './UpdateComponentsStateReducer/updateComponentsStateReducer'
import contentReducers from './ContentReducers/contentReducers'

export default combineReducers({
    posts :postReducer,
    auth:authReducer,
    makeOrder:makeOrderReducer,
    common:commonServicesReducer,
    compState:updateComponentsStateReducer,
    contentReducers:contentReducers
})
