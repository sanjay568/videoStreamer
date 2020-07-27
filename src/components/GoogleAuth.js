import React from 'react';
import { connect } from 'react-redux';
import { signOut, signIn } from '../actions/index';

class GoogleAuth extends React.Component {

    state = {
        isSignedIn: null
    }
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '346976386590-qjo4ls6onbt8fbr8mse014bqcgm7g6mp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //this.onAuthChange();
            });
        });
    }


    onAuthChange = () => {

        const auth = window.gapi.auth2.getAuthInstance();
        if (this.state.isSignedIn == null) {
            auth.signIn().then((response) => {
                const userId = response.getId();
                //this.onAuthChange(userId);
                this.props.signIn(userId);
                this.setState({ isSignedIn: true });
            });
        }
    }

    logout = () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signOut();
        this.props.signOut();
        this.setState({ isSignedIn: null });
    }

    render() {
        console.log("mapStateToProps : >>> " + this.props.isSignIn);
        return (
            <div>
                {this.props.isSignIn == true ? <button
                    onClick={() => this.logout()}
                    className='ui red google button'>
                    <i className='icon google'></i>
                    <span>SignOut</span>
                    </button> : <button className='ui green google button' onClick={() => this.onAuthChange()}>
                        <i className='icon google'>

                        </i>
                        <span>SignIn with Google</span>
                    </button>}
            </div>
        )
    }
}



const mapStateToProps = (state) => {

    return { isSignIn: state.authReducer.isSignIn }
}

export default connect(mapStateToProps, {
    signOut: signOut,
    signIn: signIn
})(GoogleAuth);