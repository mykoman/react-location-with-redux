const defaultSate = {
    personal: false,
    technical: false,
    availability: false,
    behaviour: false

}

const BtnActivator = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "ACTIVATE_BUTTON_PERSONAL":
            return  { ...state, personal: true};

        case "ACTIVATE_BUTTON_TECHNICAL":
            return  { ...state, technical: true};
            
        case "ACTIVATE_BUTTON_AVAILABILITY":
            return  { ...state, availability: true};
            
        case "ACTIVATE_BUTTON_BEHAVIOUR":
            return  { ...state, behaviour: true};    

               
        default:
            return state;
    }

};

export default BtnActivator;