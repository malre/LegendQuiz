import React, { Component } from 'react';
import Result from './components/Result';
import logo from '../quizz/svg/logo.svg';
//import "highlight.js/styles/monokai-sublime.css";
import '../quizz/App.css';
import '../../containers/bootstrap.min.css';
import '../quizz/css/bulma.css';
import lnGalery from './img/lnGalery';
import styled from 'styled-components';
import "highlight.js/styles/monokai-sublime.css";
import './components/img.css';
import Galery from './components/Galery';

const Div1 = styled.div`
  background-color: #ededed;
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
`
const registeredLanguages = {};

class AppJ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      img: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = lnGalery.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      img:lnGalery[0].img,
      question: lnGalery[0].titre,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < lnGalery.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: lnGalery[counter].titre,
      img:lnGalery[counter].img,
      answerOptions: lnGalery[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderGalery() {

    return (

     <Galery
     answer={this.state.answer}
     answerOptions={this.state.answerOptions}
     titre={this.state.question}
     img={this.state.img}
     onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="container mt-5"> <div className="App">
     
       <div className="card-body align-middle">
   
   
</div> <div className="card text-white bg-secondary mb-3">
<div className="card-body hero"> <h2 className="my-5 text-center">What can I do next?</h2><br /> 
<div className="hero-body">
<div className="page-item lead"><h1 className="title">Expression Galery</h1>
<h6 className="mb-3">viral inferno</h6>
{this.state.result ? this.renderResult() : this.renderGalery()}
</div> <h1 className="title">ipsum reversus</h1><br /></div>
</div>
<code> 
  Zombie ipsum : <br />
   L'être qui serait un jour appelé le Plan Invisible a commencé sa vie comme un étranger "cristal de morphing" encerclant 
   une planète lointaine avec sa "famille", d'autres cristaux morphing qui sont collectivement appelés l'Anneau. 
   Dans leur état naturel, le Plan et ses compagnons de l'Anneau ressemblent à des œufs en plastique semi-transparent. 
   Avec le temps, il a été séparé de sa famille et a été trouvé par les Lansinarians, une race souterraine aveugle 
   qui vivait sous l'Antarctique. 
   Les Lansinariens n'ont pas pu réagir assez rapidement aux changements de leur environnement. 
   Ainsi, ils ont développé le cristal de morphing qu'ils avaient trouvé dans un dispositif de survie qui répondait à leurs besoins.
    Ces êtres accordent plus tard l'appareil à Wonder Woman en remerciement de les avoir sauvés. 
    Le plane, qui possède une intelligence artificielle sophistiquée, répond aux pensées de Wonder Woman. 
    Il est capable de se rendre invisible ainsi que de modifier sa forme, se transformant en n'importe quelle forme de véhicule 
    que son porteur désire, qu'il s'agit d'un jet, sous-marin, moto, ou char tiré par des chevaux. @Wyki
   </code> 
</div>

<footer className="footer"><p className="has-text-centered"><strong>To get started,</strong> edit <code>src/App.js</code> and save to reload.</p>
</footer>
</div>  </div>
    );
  }
}export default AppJ;


