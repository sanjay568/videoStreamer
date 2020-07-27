import { act } from "@testing-library/react";

const INIT_STATE = {
    isSignIn: null,
    userId: null
}

const authReducer = (state= INIT_STATE ,action) =>{

    if(action.type == "SIGN_IN"){
        return {...state, 
                isSignIn: true, 
                userId: action.payload.userId
               }
    }

    if(action.type == "SIGN_OUT"){
        return {...state, 
                isSignIn: false , 
                userId: null
               }
    }

    if(action.type=='CREATE_STREAM'){

        //console.log(action.payload);
        return {
            ...state,
            createStreamResponse: action.payload
        }
    }

    if(action.type=='FETCH_STREAMS'){

       // console.log(action.payload);
        return {
            ...state,
            avaiableStreams: action.payload
        }
    }


    if(action.type=='FETCH_STREAM'){
        return {
            ...state,
            stream: action.payload
        }
    }

    if(action.type=='EDIT_STREAM'){
        
        return {
            ...state,
            stream: action.payload
        }
    }
    
    if(action.type=='DELETE_STREAM'){
        return {
            ...state,
            stream: null
        }
    }



    return state;
} 

export default authReducer;