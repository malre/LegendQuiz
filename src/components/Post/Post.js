import React from 'react';
import './bootstrap.min.1.css';
import './bootstrap.css';
import './Post.css';
import { withRouter } from 'react-router-dom';

const post = (props) => {
    console.log(props);
    return(                 
    <article className="Post" onClick={props.clicked}>
    <div className="jumbotron"> 
    <h1 className="display-3">{props.title}</h1>
    <p className="lead">{props.Presentation}</p>
    <img className="imgThumbnail" alt=" " src={props.Adress} />
    <br /><br />
    
    <p className="lead btn btn-primary btn-lg" role="button" >{props.author}</p>
   
    </div> 
    </article>
   
 
    
)};

export default withRouter(post);