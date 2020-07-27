import React from 'react';
import {  Router,Route,Switch } from 'react-router-dom';
import StreamList from '../components/streams/StreamList'
import StreamCreate from '../components/streams/StreamCreate'
import StreamDelete from '../components/streams/StreamDelete'
import StreamEdit from '../components/streams/StreamEdit'
import StreamShow from '../components/streams/StreamShow'
import Header from './Header';
import history from '../history';


const App = () =>{

    return(
        
        <div className='ui container'>
              
        <Router history={history}>
                <Header/>  
                <Switch>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/stream/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit/:id" component={StreamEdit}></Route>
                    <Route path="/streams/delete/:id" component={StreamDelete}></Route>
                    <Route path="/streams/:id" component={StreamShow}></Route>
                </Switch>
                
        </Router>
        </div>

        
    
    )
}

export default App;