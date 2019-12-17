import {createStore, combineReducers} from 'redux';
import PersonalReducer from '../Reducers/PersonalQuestion';
import TechnicalReducer from '../Reducers/TechnicalQuestion';
import AvailabilityReducer from '../Reducers/AvailabilityQuestion';
import BehaviouralReducer from '../Reducers/BehaviourQuestion';
import TabPosition from '../Reducers/TabPosition';
import Interested from '../Reducers/Interested';
import BtnActivator from '../Reducers/BtnActivator';





//const  consoleToLog = ()=>{console.log('hi'};
//rerenders store when there is a change

export default ()=>{
    const store = createStore(
        combineReducers({personalQuestion: PersonalReducer, 
            technicalQuestion: TechnicalReducer, 
            availabilityQuestion: AvailabilityReducer,
            behaviouralQuestion: BehaviouralReducer,
            tabPosition: TabPosition,
            interest: Interested,
            btnActivator: BtnActivator
        })
        );
        return store
}
//export default storeConfig();