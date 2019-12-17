const defaultSate = {
    text: [{id: 1, name: 'uniLevel', label: 'What university level are you right now?', value: '', placeholder: 'University Attended' },
    {id: 2, name: 'howStudies', label: 'How are you doing in your studies?', value: '', placeholder: 'let us about your cpga and other info  ' },
    {id: 3, name: 'classInternship', label: 'How do you see yourself combining classes with this internship?', value: '', placeholder: 'Giving this a trial or confident to than cope?' },
    {id: 4, name: 'weekendAvailable', label: 'Are you available on weekends?', value: '', placeholder: 'Yes I am at weekends'},
    {id: 5, name: 'commitmentSoftware', label: 'Are you able to commit 24 months of your life into being trained into becoming a world class software engineer, one who has worked on live projects before graduating from college?', value: '', placeholder: 'yes I am available' },
    {id: 6, name: 'postGraduation', label: 'Where do you see yourself after college graduation?', value: '', placeholder: 'my father\'s house' },
    ],
    radio: []
}

const AvailabilityReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "UPDATE_TEXT_VALUE_AVAILABILITY":
            const newText = state.text.map((text)=>{
                if(text.name ===action.name){
                    console.log(text.name);
                    console.log(action.name);
                    return ({...text , value: action.value});
                }else{
                    return text;
                }
            });  
            return {...state , text: newText};
        case "CLEAR_FIELD":
            return defaultSate;      
        default:
            return state;
    }

};

export default AvailabilityReducer;