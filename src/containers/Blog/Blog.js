import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './bootstrap.css';
import './bootstrap.min.css';

import './Blog.css';




class Blog extends Component {

    render () {
        
        
        return (
            <div className="Blog">
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="rowp">
              <ul className="blog ul">
                   <li className="nav-item">
            <NavLink to="/" exact
                  activeClassName="my-active"
                  activeStyle={{
                color: 'linen',
                textDecoration:' underline'
            }}>Home</NavLink>   
            </li><li>
             <NavLink to={{
              pathname:'/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
              }}>New-Post</NavLink>
            
      </li>
    
    </ul>
     </div>
</nav>
<p>La courbe du blanc-manger peut étre construite a partir des fonctions en dents de scie si la série 
est approchée par les premiers termes. Les fonctions en dents de scie sont progressivement ajoutées a 
la courbe a chaque étape. <br />
En mathématiques, la courbe du blanc-manger est une courbe fractale constructible 
par subdivision de son ensemble de définition. Elle est aussi connue comme <u>la courbe de Takagi</u>.

</p>
              {/*<Route path="/" exact render={() => <h1>Home </h1>} />
              <Route path="/" render={() => <h1>Home 2</h1>} />*/}
              <Route path="/" exact component={Posts} /> 
              
              <Route path="/New-Post" component={NewPost} />
              <Route path="/:id" exact component={FullPost} /> 
             
            </div>
        );
    }
}

export default Blog;