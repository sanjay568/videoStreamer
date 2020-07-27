import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions/index';
import { Link } from 'react-router-dom';

class  StreamList  extends React.Component{
    

    componentDidMount(){
        this.props.fetchStreams();
    }

    render(){
        const streams =this.props.avaiableStreams;
        //console.log(streams);
        return(
            <div className="ui content" style={{ margin:10}}>
                <h2>Streams</h2>
                <div className='ui celled list'>
                
                { streams!= undefined ? 
                
                    streams.map((stream,index)=>{
                        //console.log(stream);
                        return (<div className="item" key={index}>
                            <i className='ui large  icon camera'></i>
                            
                            <div className='ui content'>
                            <div className='title'>
                                <Link to={ '/streams/'+`${index}`}> {stream.title} </Link>
                            </div>
                            <div className='description'>
                                {stream.description}
                            </div>
                            </div>
                            { stream.userId === this.props.userId ?
                                <div className='right floated content'>
                                     <Link to={ '/streams/edit/'+`${index}`} className='ui button primary'>Edit</Link>
                                     <Link to={ '/streams/delete/'+`${index}`} className='ui button negative'>Delete</Link>
                                </div> : null
                            }
                            
                        </div>
                        )
                    })
                 : 'Loading .....'}
                 
                 </div>
                {
                this.props.isSignIn ? 
                    <Link to="/stream/new" className='ui button primary  right floated'>Create Stream</Link> : null
                }
            </div>
            
        )
    }
    
}   

const mapStateToProps = (state)=>{
    
    return { avaiableStreams: state.authReducer.avaiableStreams , 
             userId : state.authReducer.userId,
             isSignIn: state.authReducer.isSignIn  }
}
export default connect(mapStateToProps,{ fetchStreams : fetchStreams})(StreamList);