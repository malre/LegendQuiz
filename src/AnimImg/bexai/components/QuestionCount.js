import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
    
    <div className="content has-text-centered">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
   <hr className="navbar-divider" />
   
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
