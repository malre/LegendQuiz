import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Gifgy from '../../img/img/wattbooth2.gif';
import ParalaX from '../../img/img/parallaxJ4.gif';
var CSSTransition = require('react-addons-css-transition-group');


function Result(props) {
  return (
   <Container>
      <CSSTransition
              appear="true"
              transitionEnterTimeout={120}
              transitionLeaveTimeout={250}
              transitionName="fade"
              >
    <div className="container is-fluid">
    <div className="notification bg-secondary mb-2 ">
    <center><img scr={ParalaX} alt='' /></center>
       Sur 5 Question vous êtes devenue un <strong>{props.quizResult}</strong> Bravo !
       <br />
       <center><img scr={Gifgy} alt='' /></center>
      </div></div>
     </CSSTransition>
     </Container>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
