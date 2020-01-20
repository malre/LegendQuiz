import React , { Component } from 'react';
import logo from '../logo.svg';
import Cockpit from '../components/Cockpit/Cockpit';
import StyledButton from '../containers/Module_css/Modulcss';
import Persons from '../components/Persons/Persons';
import AuthContext from '../context/auth-context';
import Aux from '../Hoc/Auxiliary';
import withClass from '../context/withClass';
import classes from './ApliTest.css';
import './ApliTest.css';
//import  from 'react';
//import src from '/logo.svg';

//function App() {
//const App = props => {


class ApliTest extends Component {
  constructor(props){
    super(props);
  }
  state = {
    persons:[
      { id:'vfrs1', name:'Julie', age:'29'},
      { id:'vfrs2', name:'Roland', age:'43'},
      { id:'vfrs3', name:'Edouard', age:'38'},
      { id:'vfrs4', name:'Laurie', age:'41'}
    ],
    otherState: 'some value',
    appTitle: 'Development Base',
    authenticated: false,
    ContextLog: false,
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
  });
  const person = {
      ...this.state.persons[personIndex]
  };
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons });
};

loginHandler = () => {
  this.setState({authenticated: true});
};

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})

};

deletePersonHandler = (personIndex) => {
  //const persons =this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

};

render(){

   let persons = null;
   let loginFail = null;

  if (this.state.authenticated === false){
    return(<Aux>
    <p> Please log in</p>
    <StyledButton clid={this.loginHandler}>Login</StyledButton>

    </Aux>
      );
  }
   if (this.state.showPersons){
     persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />;
      }


 return (
  <Aux> 

<div className="ApliTest">
      <header className="ApliTest-header">
      <div className="ApliTest-log" > 
        <img src={logo} className="ApliTest-logo" alt="logo" />
        <img src={logo} className="ApliTest-logo" alt="logo" />
        <img src={logo} className="ApliTest-logo" alt="logo" />
        </div>
   
     <AuthContext.Provider>
       {loginFail}
      <Cockpit
      title={this.state.appTitle}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonHandler}/>

      { this.state.authenticated ? 
      <p><div id="log"> </div>
         {persons}
         
        </p>:null
      }
        </AuthContext.Provider>
     
        </header>
      <a
          className="App-link2"
          href="https://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >App - Web - Master - Dev
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>   </Aux>
  );
}
}
export default withClass(ApliTest, classes.App);


 /* return React.createElement('div', {className :'App'}, React.createElement('h1', null,'I\' learn React'));
  return React.createElement('header', {className :'App-header'}, React.createElement('img', {className :'App-logo'},{logo}));

  
  */
   
    



