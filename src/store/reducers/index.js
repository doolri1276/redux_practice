import Reducer1 from './reducer1'
import UserReducer from './user_reducer'
import { combineREducers, combineReducers } from 'redux'

const rootReducer = combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer
})

export default rootReducer




