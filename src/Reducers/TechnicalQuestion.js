const defaultSate = {
    text: [{id: 1, name: 'course', label: 'What is your current major in school? (Computer Science/Engineering & Math-related fields take precedence)', value: '', placeholder: 'Computer Science' },
    {id: 2, name: 'techStack', label: 'Explain what the product/feature was, the technology stack used, how long ago, and some sample code (if possible).', value: '', placeholder: 'Javascript(1year), git(6months), python(1 month), you can check out my repo at www.github.com/user ' },
    ],
    radio: [{id: 1, value: 'Yes',name: 'writtenCode', label :'Have you written any code?', choices: ['Yes','No']},
    {id: 2, value: 'Yes',name: 'laptop', label :'Do you have a Mac (laptops)? PC (laptops)?', choices: ['Yes','No']},
    ]
}

const TechnicalReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "UPDATE_TEXT_VALUE_TECHNICAL":
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

            case "UPDATE_RADIO_VALUE_TECHNICAL":
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

export default TechnicalReducer;