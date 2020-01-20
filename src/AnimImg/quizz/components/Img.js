import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  
  return(
    <div  className="Hero-body">
    <img className="question" alt='' src={props.img} />
   <hr />
    </div>
  );
}

Img.propTypes = {
  img: PropTypes.string.isRequired
};

export default Img;