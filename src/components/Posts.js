import React from 'react';
import Aux from '../Hoc/Auxiliary';
import '../containers/bootstrap.min.css';

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2> Loading ...</h2>;
    }
    return (
       <div className="card">
           {posts.map(post => (
               <Aux>
               <div key={post.id} className="card-body">
               <h5 className="card-title">{post.File}</h5>

               <p className="card-text">
               {post.Presentation}
               </p>
               <img className="d-block w-100" alt='' src={post.LocalFile} />
               </div>
              
               
               
               </Aux>
           ))}

</div>
    );
    
};
export default Posts;


