import React from 'react';
import Modal from '../../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream,deleteStream} from '../../actions';

class StreamDelete extends React.Component{

    componentDidMount()
    {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    actions =(
        <div>
         <button 
            className='ui primary button' 
            onClick={() => this.deleteSelectedStream() }>Delete</button>
         <button 
            className='ui button' 
            onClick={() => history.push('/')}>Cancel</button>
        </div>
    );

    deleteSelectedStream = ()=>{

        this.props.deleteStream(this.props.match.params.id);
    } 

    render(){
        
        return(
            <div>
                <Modal title="Delete Stream" 
                    content="Are you want to delete this stream ?"
                    actions={this.actions} />
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    
    return { stream: state.authReducer.stream };

}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);