const defaultSate = {
    address: undefined,
    coords: undefined,
    isAddressFetched: false,
}

const LocationReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "UPDATE_ADDRESS_AND_COORD":
            const address = action.address;
            const coords = action.coords;
            const newState= {...state, address, coords};
            console.log(newState);
            return {...state, address, coords};
        case "ADDRESS_IS_FETCHED":
            return {...state, isAddressFetched:true}
        default:
            return state;
    }

};

export default LocationReducer;