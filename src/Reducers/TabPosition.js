const defaultSate = {
    index: 0
}

const TabPosition = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "NEXT_PAGE":
            const nextPage = state.index +1;
            return  { index: nextPage};
        case "PREVIOUS_PAGE":
                const prevPage = state.index -1;
                return  { index: prevPage};       
        default:
            return state;
    }

};

export default TabPosition;