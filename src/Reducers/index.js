import {combineReducers} from 'redux';
import activeUser from './activeUser'

const allReducers = combineReducers({
    activeUser:activeUser
});

export default allReducers