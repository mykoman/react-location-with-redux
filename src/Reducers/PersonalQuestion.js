const defaultSate = {
    text: [{id: 1, name: 'fullName', label: 'Full names', value: '',placeholder: 'John Doe' },
    {id: 2, name: 'phone', label: 'Phone Number', value: '', placeholder: '080 123 457 12' },
    {id: 3, name: 'email', label: 'Email Address', value: '',placeholder: 'myemail@mail.com' },
    {id: 4, name: 'location', label: 'Where do you reside?', value: '',placeholder: 'Abuja' },
    {id: 5, name: 'age', label: 'How old are you?', value: '', placeholder: "15" },
    ],
    radio: [{id: 1, value: 'Male',name: 'gender', label :'Gender', choices: ['Male','Female']},
    
    ]
}

const PersonalReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "UPDATE_TEXT_VALUE_PERSONAL":
            const newText = state.text.map((text)=>{
                if(text.name ===action.name){
                    //console.log(text.name);
                    //console.log(action.name);
                    return ({...text , value: action.value});
                }else{
                    return text;
                }
            });  
            return {...state , text: newText};

        case "UPDATE_RADIO_VALUE_PERSONAL":
            const newRadio = state.radio.map((radio)=>{
                if(radio.name ===action.name){
                    console.log(radio.name);
                    console.log(action.value);
                    return ({...radio , value: action.value});
                }else{
                    return radio;
                }
            });  
            return {...state , radio: newRadio};    
            
        case "CLEAR_FIELD":
                return defaultSate;
        default:
            return state;
    }

};

export default PersonalReducer;