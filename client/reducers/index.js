import { combineReducers } from 'redux';
import agents from './agents';
import applications from './applications';

const todoApp = combineReducers({
    agents,
    applications
});

export default todoApp;
