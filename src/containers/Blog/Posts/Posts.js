import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';
import '../bootstrap.min.css';
import '../bootstrap.css'
import './Post.css';




class Posts extends Component {
    

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    
    componentDidMount () {
        
        console.log(this.props);
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        //axios.get( 'http://soleiletlune.hebergratuit.net/Pinterest/Apophysis/Img.json',{headers: {'Access-Control-Allow-Origin':'*'}} )
        axios.get('https://myprojectimg.firebaseio.com/myprojectimg.json')
        .then( response => {
                const posts = response.data.slice(0, 3);
                const updatedPosts = posts.map(post => {
                    return {
                       
                        ...post,
                        author: 'Leanie Mason',
                        
                    }
                });
                this.setState({posts: updatedPosts});
              //  console.log( response );
            } )
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return(<Link to ={'/' + post.id} key={post.id}>
                    <Post 
                    title={post.File} 
                    Adress={post.LocalFile}
                    Presentation={post.Presentation}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>);
                    
            });
        }
        
        return (
            
                 <section className="Posts">
                   <div className="alert alert-dismissible alert-light">
                        {posts}
                        </div>
                 </section> 
               
             
             
           
        )
    }
}export default Posts;
