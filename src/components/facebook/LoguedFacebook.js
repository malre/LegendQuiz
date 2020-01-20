import React, { Component } from 'react';
import Aux from '../../Hoc/Auxiliary';
import FacebookLogin from 'react-facebook-login';

export default class LoguedFacebook extends Component {
    state = {
        isLoggeedIn: false,
        userID:'',
        email:'',
        picture:''
    }

    componentClicked = () => console.log("clicked");

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            isLoggeedIn: true,
            userID: response.userID,
            name: response.email,
            picture: response.picture.data.url
        })
      };

    render() {
        let fbContent;
        if(this.state.isLoggeedIn){
            fbContent = (<div>
                style={{ 
                    width: '360px',
                    haight: '480',
                    margin:'auto',
                    background: '#ccc',
                    padding: '20px'
                }}
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
            </div>);
        }else {
            fbContent =(
                <FacebookLogin
                appId="1495525790487602"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
            );
        }
        return (
            <Aux>
            <div>
     {
         fbContent
     }
 
            </div>
            </Aux>
        )
    }
}
