import React from 'react';
import {connect } from 'react-redux';
import {fetchStream,editStream } from '../../actions';
import StreamForm from './StreamForm';
import { formValues, startAsyncValidation } from 'redux-form';
import _ from 'lodash';

class StreamEdit extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
       // console.log("componentDidMount >>>") ;
        
    }
    

    onSubmit= (formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues);
    }


    render(){
        //console.log("render >>>") ;  
        const stream = this.props.formValues;
        
        if(stream== undefined)
            return <div>Loading .....</div>

        //debugger;
        return(
            <div>
            
                <h2>Edit a Stream</h2>
                <StreamForm 
                    initialValues = { _.pick(this.props.formValues,'title','description') } 
                    onSubmit={this.onSubmit} 
                />
            </div>
                
        )
    }
}
    
const mapStateToProps = (state) =>{
    //console.log("mapStateToProps >>>") ;
    
    return { formValues : state.authReducer.stream }
}


export default connect(mapStateToProps,{ fetchStream,editStream })(StreamEdit);