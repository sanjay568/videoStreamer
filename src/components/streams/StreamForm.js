import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{


    constructor(props){
        super(props);
        console.log("StreamForm construtor ");
    }
    

    onInputChange =(event) =>{
        //debugger;
        const val = event.target.value;
        
    }

    renderInput = ({input,label,meta}) => {

        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        
        return (<div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete='off'  />
                    <div className='ui error message'>{meta.touched ?  meta.error: ''}</div>
                </div>)
    }

    renderSelect(formProps){


        return(<div>
            <select onChange={formProps.input.onChange}  value={formProps.input.value}>
                <option value='male'>Male</option>
                <option value='female'>female</option>
            </select></div>
        )
    }

    onSubmit = (formValues) =>{

        this.props.onSubmit(formValues);

    }

    render(){
        
        return(
            
                <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label="Enter Title"  />
                    <Field name='description' component={this.renderInput} label="Enter Description"   />
                    <Field name='gender' component={this.renderSelect} />
                    <br/>
                    <button className='ui button primary' type='submit'>Submit</button>
                </form>
            
        )
    }
    
}


const validate = (formValues) =>{

    const errors ={};

    if(!formValues.title){
        errors.title="You must enter a title"
    }

    if(!formValues.description){
        errors.description="You must enter a description"
    }


    return errors;
}


export default reduxForm({
    form: 'streamForm',
    validate: validate,
    enableReinitialize: true
})(StreamForm);