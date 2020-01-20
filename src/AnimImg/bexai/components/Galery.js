import React from 'react';
import Imge from './Imge';
import '../../quizz/css/bulma.css';
import '../../quizz/css/css/flag-icon.css';
import AnswerOption from './AnswerOption';
import Titre from './Titre';

function Galery(props) {
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
    <div className="container" >
   
    <div className="bg-secondary mb-3"> <h2 className="Hero-body card text-white">Galery</h2>
    <span className="flag-icon flag-icon-de flag-icon-squared hero title"></span>
    <span className="flag-icon flag-icon-fr flag-icon-squared hero title"></span>
    <span className="flag-icon flag-icon-gb flag-icon-squared hero title"></span>
    
      <div>
      <div className="Hero-body card">
       <Imge className="myImg" img={props.img} />
       <Titre content={props.titre} /></div>
       <div className="hero-body">
<div className="page-item lead">
       <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)} 
       </ul></div>
      </div>
      </div></div></div>


      
  );
}



export default Galery;