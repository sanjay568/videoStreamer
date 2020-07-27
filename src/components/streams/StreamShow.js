import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component{


    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    render(){

        if(!this.props.stream){
            return <div>Loading...</div>
        }

        const { title , description } = this.props.stream;
        return(
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }
}


const mapStateToStream = (state) =>{
    return { stream: state.authReducer.stream };
}

export default connect(mapStateToStream,{ fetchStream })(StreamShow);