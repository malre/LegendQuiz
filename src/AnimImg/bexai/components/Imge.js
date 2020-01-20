import React from 'react';
import PropTypes from 'prop-types';

function Imge(props) {
  
  return(
    <div  className="Hero-body">
    <img className="question" alt='' src={props.img} />
   <hr />
    </div>
  );
}

Imge.propTypes = {
  img: PropTypes.string.isRequired
};

export default Imge;