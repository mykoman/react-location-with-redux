const defaultSate = {
    start: false
}

const Interested = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "SHOW_FORM":
            return  { start: true};
               
        default:
            return state;
    }

};

export default Interested;