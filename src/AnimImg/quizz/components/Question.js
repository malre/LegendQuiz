import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  
  return(
    <div className="Hero-body bg-secondary mb-2">
    <h2 className="question">{props.content}</h2>
   <hr />
    </div>
  );
  
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
