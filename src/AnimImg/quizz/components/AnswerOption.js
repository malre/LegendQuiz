import React from 'react';
import PropTypes from 'prop-types';
import '../css/bulma.css';
import Styled from 'styled-components';


const Input1 = Styled.input`
  type:checkbox;
  color:steelblue;
  border: 4px solid OldLace;
    -moz-border-radius: 0.31em 0.4em 0.31em 0.4em; 
    border-radius: 0.61em 0.4em 0.61em 0.4em; 
    font-weight: bold;

`
function AnswerOption(props) {
  
  return (
   <div className="card text-white bg-secondary mb-3">
      
      <li className="answerOption">
     <div className="card-body">
    <Input1
        type="checkbox"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      /> 
      </div></li>
      <h4 className="card-title">
      <label className="radioCustomLabel" htmlFor={props.answerType}>
      {props.answerContent}  
      </label></h4>
     
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
