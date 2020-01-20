import React, { Component } from 'react';
import axios from 'axios';
import Timer from './Timer';
//import axios from '../../../axios';
import './FullPost.css';

const PostImg = {
    width: '70%',
    heigth: '80%',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    margin: '10px',
    cursor: 'wait'

};

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        this.LoadData();
    }

    LoadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
                
                //axios.get( 'https://jsonplaceholder.typicode.com/posts/' + {params : { index: this.props.match.params.id })
                axios.get( 'https://myprojectimg.firebaseio.com/myprojectimg/?ID='+ this.props.match.params.id  ,{mode:"cors()"})
                .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p ClassName={PostImg}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = ( <div  className="FullPost">
            <p className={PostImg}>Loading...!</p>
                <p className="loader">
                       </p>
                       <Timer startTime = "15" />
                   
                       </div>
            );
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.id}</h1>
                    <p>
                    {this.state.loadedPost.Presentation}
                    </p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;