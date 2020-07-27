import axios from 'axios';
import { formValues } from 'redux-form';
import  history from '../history';

export const signIn = (userId) =>{

    return{
        type:'SIGN_IN',
        payload:{
            'userId': userId
        }
    };
};

export const signOut = () =>{

    return{
        type:'SIGN_OUT',
        payload:{
            'userId': null
        }
    };
};


export const createStream = (formValues)=>{

    return async (dispatch,getState) =>{
        const userId = getState().authReducer.userId;
        formValues = {...formValues, userId: userId}
        const response =await axios.post("http://localhost:3001/streams",formValues);
        dispatch({ type:'CREATE_STREAM', payload: response.data } );
        history.push('/');
    };
}


export const fetchStreams =() =>{

    return async (dispatch,getState) =>{
        const response =await axios.get("http://localhost:3001/streams");
        dispatch({ type:'FETCH_STREAMS', payload: response.data } )
    };
}



export const fetchStream = (id)=>{

    return async (dispatch,getState) =>{
        const response = await axios.get("http://localhost:3001/streams/"+id);
        //console.log(response);
        dispatch({ type:'FETCH_STREAM',payload: response.data});
        
    }
    
}

export const deleteStream = (id)=>{
    
    return async (dispatch,getState) =>{
        await axios.delete("http://localhost:3001/streams/"+id);
        dispatch({ type:'DELETE_STREAM',payload: null});
        history.push('/');
    }
    
}
 
export const editStream = (id,formValues)=>{
    console.log(id);
    return async (dispatch,getState) =>{
        const response = await axios.patch('http://localhost:3001/streams/'+id,formValues);
        dispatch({ type:'EDIT_STREAM',payload: response.data});
        history.push('/');
    }
    
}