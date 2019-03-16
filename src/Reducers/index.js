import {combineReducers} from 'redux';
import activeUser from './activeUser'
import allusers from './allusers'

const allReducers = combineReducers({
    activeUser:activeUser,
    allusers:allusers
});

export default allReducers