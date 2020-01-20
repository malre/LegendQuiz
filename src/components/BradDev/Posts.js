import React from 'react';
import Aux from '../../Hoc/Auxiliary';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div className="card-header"><h2 className="align-middle">Loading...</h2></div>;
  }

  return (
    <div className="card" >
      {posts.map(post => (
        <Aux key={post.id} >
        <div className="card-body align-middle">
        <h5 className="card-title ml-1">{post.File}</h5>
        <img src={post.LocalFile} className="img-thumbnail" alt=''/>
        
        <h6 className="card-subtitle mb-2 text-muted"><a href={post.LocalFile}>{post.File}</a></h6>
        <p className="card-text px-2">
        {post.Presentation}
        </p>
       </div>
       
        
        
        </Aux>
      ))}
   </div>
  );
};

export default Posts;
