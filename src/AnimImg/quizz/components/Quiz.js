import React from 'react';
import PropTypes from 'prop-types';
//import { ReactCSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Img from '../components/Img';
import '../css/bulma.css';
import '../css/css/flag-icon.css';


function Quiz(props) {
  
  
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
       />
    );
  }
  

  return (
    <div>
    <h2 className="card-header">QUIZZ ON US</h2>
   <span className="flag-icon flag-icon-de flag-icon-squared hero title"></span>
    <span className="flag-icon flag-icon-fr flag-icon-squared hero title"></span>
    <span className="flag-icon flag-icon-gb flag-icon-squared hero title"></span>
    
      <div className="container" key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <div className="Hero-body">
       <Img img={props.img} />
        <Question content={props.question} />
       <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}  
        </ul>
      </div>
      </div></div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
