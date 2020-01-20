import React from 'react';
import PropTypes from 'prop-types';

function Titre(props) {
  
  return(
    <div  className="Hero-body">
    <h2 className="question">{props.content}</h2>
   <hr />
    </div>
  );
  
}

Titre.propTypes = {
  content: PropTypes.string.isRequired
};

export default Titre;
