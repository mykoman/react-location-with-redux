const defaultSate = {
    text: [{id: 1, name: 'dreamCareer', label: 'What is your dream career?', value: '',placeholder: 'Becoming a lawyer' },
    {id: 2, name: 'whySoftware', label: 'Why are you interested in becoming a software engineer?', value: '', placeholder: 'I love the way they dress' },
    {id: 3, name: 'teamPlayer', label: 'How much of a team player are you? Can you provide a past situation in which you were there for your team?', value: '', placeholder: 'I have worked with a team of to make magic' },
    {id: 4, name: 'softwarePassion', label: 'How passionate are you about learning software development?', value: '', placeholder: 'Software development is all I have done in my life' },
    {id: 5, name: 'teachableSpirit', label: 'Do you have a teachable spirit & a learning attitude?', value: '', placeholder: 'My plans are often superior, I do a lot of research myself' },
    ],
    radio: []
}

const BehaviouralReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        case "UPDATE_TEXT_VALUE_BEHAVIOURAL":
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

export default BehaviouralReducer;