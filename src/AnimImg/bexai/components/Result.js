import React from 'react';
import PropTypes from 'prop-types';
import GaleryImg from '../../GaleryImg/GaleryImg';


function Result(props) {
  return (
   
    <div className="container is-fluid">
     <div className="notification">
  
   <i>La journee est <strong>{props.quizResult}</strong>!</i>
  </div>
  <GaleryImg />
     </div>
   
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;

