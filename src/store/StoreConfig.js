import {createStore, combineReducers} from 'redux';
import PersonalReducer from '../Reducers/PersonalQuestion';
import TechnicalReducer from '../Reducers/TechnicalQuestion';
import AvailabilityReducer from '../Reducers/AvailabilityQuestion';
import BehaviouralReducer from '../Reducers/BehaviourQuestion';
import TabPosition from '../Reducers/TabPosition';
import Interested from '../Reducers/Interested';
import BtnActivator from '../Reducers/BtnActivator';
import LocationReducer from '../Reducers/LocationReducer';





//const  consoleToLog = ()=>{console.log('hi'};
//rerenders store when there is a change

export default ()=>{
    const store = createStore(
        combineReducers({
            locationDetails:LocationReducer
        })
        );
        return store
}
//export default storeConfig();