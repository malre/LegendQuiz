import React from 'react';
import PropTypes from 'prop-types';
import "highlight.js/styles/monokai-sublime.css";
import Styled from 'styled-components';


const Input1 = Styled.input`
  
  border:8px solib lightgrey
`
function AnswerOption(props) {
  
  return ( 
    <div className="card-body">
    <div className="card-header">Need help? Ask here!</div>
    <li className="answerOption">
    <label className="radioCustomLabel" htmlFor={props.answerType}>
      {props.answerContent}    
      <hr /> 
     <h4 className="card-title"><i>Cliquer</i></h4>
    <div className="card text-white bg-secondary mb-3">
      <Input1
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={props.answerType === props.answer}
      id={props.answerType}
      value={props.answerType}
      disabled={props.answer}
      onChange={props.onAnswerSelected}
    /> </div>
    </label>
    </li>
    </div>
 );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  
};

export default AnswerOption;
