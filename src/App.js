import React, { Component } from 'react'; //8.5K (gzipped: 3.4)
import { Spring } from 'react-spring/renderprops'
import './App.css';
import Sound from 'react-sound';
import soundBeep from "./AnimImg/img/Sound/578625main_sputnik-beep.m4r";
import styled from 'styled-components';
import mainFont from './AnimImg/Fonts/SeaFire.ttf';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import mainFontEot from './AnimImg/Fonts/SeaFire.otf';
import ParticlesBg from 'particles-bg';
import Quizz1 from './AnimImg/quizz/Quizz1';
import AppJ from './AnimImg/bexai/AppJ';
import unknown04Error from './containers/containers/error404/handler404';
import MySlideShowComponent from './AnimImg/SlideShowImg';
import CompNameText from './Exercise2/CompName/CompName';
import AnimImgFirst from './AnimImg/AnimImg';
import UserInput from './Exercise1/UserInput/UserInput';
import UserOutput from './Exercise1/UserOutput/UserOutput';
import ApliTest from "./containers/ApliTest";
import AppPost from './containers/AppPost';
import ApliTest2 from "./containers/ApliTest2";
import Appt from './AnimImg/rdx/App';
import StyledBtn from './containers/Module_css/Modulcss_Btn';
import Component1 from './components/component1';
import LoguedFacebook from './components/facebook/LoguedFacebook';
import Paginatez from './containers/Paginatez';
import { Container } from '@material-ui/core';
import TradApp from './UI/tradApp';
import AppR from './containers/containers/AppR'
var CSSTransition = require('react-addons-css-transition-group');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const StyledB =styled.a`
   vertical-align: baseline;
   padding: 10px;
`

const P1 = styled.p`
color: white;
font-size: 1.9em;
vertical-align: baseline;
padding: 10px;
text-align: left; 
font-family: 'SeaFire';
    src: url(${mainFont}) format('truetype');
    src: url(${mainFontEot}) format('embedded-opentype'),
    src: url('./Fonts/SeaFire.woff') format('woff'),
    src: url('./Fonts/SeaFire.svg') format('svg'); 
   
@font-face {
    font-family: 'SeaFire';
    src: url(${mainFont}) format('truetype');
}
` 

class App extends Component {
  state={
    Exocise:[
      {name:'paul', age:32},
      {name:'pauline', age:42},
      {name:'paulo', age:51}
    ],
     media: '',
    showSlideShow:false,
    showpost:false,
    showExercise:false,
    showExercise2:false,
    showApp:false,
    showApp2:false,
    showApp4:false,
    showPost2:false,
    showApp8:false,
    showApp9:false,
    Appcs: false

  }
  
  mediaName = (event) => {
    this.setState({
      media : event.target.value
    })

  }
  changeNameInputUser = (event) => {
    this.setState({
      Exocise:[
        {name:'paul', age:32},
        {name: event.target.value, age:42},
        {name:'paulo', age:51}
      ],
      
    })

  }

  delCardUp = (index) => {
    const cardDel = this.state.media.split('');
    cardDel.splice(index, 1);
    const updateDelCard = cardDel.join('');
    this.setState({media: updateDelCard});
  }
  
  toggleQuizzHandler = () => {
    const does11Show = this.state.showApp8;
    this.setState({showApp8: !does11Show});
  
  }

  toggleGaleryHandler = () => {
    const does12Show = this.state.showApp9;
    this.setState({showApp9: !does12Show});
  
  }

  toggleExerciseHandler = () => {
    const doesShow = this.state.showExercise;
    this.setState({showExercise: !doesShow});
  
  }

  toggleExercise2Handler = () => {
    const does2Show = this.state.showExercise2;
    this.setState({showExercise2: !does2Show});
  
  }

  toggleAppTestHandler = () => {
    const does4Show = this.state.showApp;
    this.setState({showApp: !does4Show});
  
  }

  toggleAppTest2Handler = () => {
    const does5Show = this.state.showApp2;
    this.setState({showApp2: !does5Show});
  
  }

  toggleshowSlideShowHandler = () => {
    const does3Show = this.state.showSlideShow;
    this.setState({showSlideShow: !does3Show});
  
  }

  toggleshowSpringEffectHandler = () => {
    const does6Show = this.state.showApp4;
    this.setState({showApp4: !does6Show});
  
  }

  toggleshowPostHandler = () => {
    const does12Show = this.state.showPost;
    this.setState({showPost: !does12Show});
  }

  toggleshowPost2Handler = () => {
    const does1AShow = this.state.showPost2;
    this.setState({showPost2: !does1AShow});
   
  }

  render() {
    

    const styleApp={
      dipslay:'inline-flex',
      textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'

    }
    const StyleSlid={
      background: 'linear-gradient(42deg, lightgrey 28%, steelblue 72%)',
      color:'black',
      dipslay:'inline-flex',
      padding: '10px', 
      size:'contain',
        textAlign: 'center', 
        margin: '12px', 
        border: '1px solid black',
        borderLeftColor: '2px solid violet',
        borderBottomColor: '3px solid violet'
    } 
    const StyleExo={
      backgroundColor: 'white',
      color:'black',
      dipslay:'inline-flex',
      padding: '10px', 
        textAlign: 'left', 
        margin: '12px', 
        border: '1px solid black',
        borderLeftColor: '2px solid violet',
        borderTopColor: '3px solid violet'
    } 

    const stylHr={
      borderWidth:'0.5',
      borderColor: 'antique',
      margin:'10'
    }
   /* const buttonFontSize = theme.variants('layout', 'kind', {
      small: { compact: '0.9rem', cozy: '1.2rem' },
      medium: { compact: '1rem', cozy: '1.3rem' },
      large: { compact: '1.1rem', cozy: '1.4rem' },
    });*/

    const blockUl={
      //display: 'inline-flex',
      backgroudColor:'linen',
      flexDirection: 'row',
      fontSize: '2rem',
      size: 'contain'
      }
    const styleFrReact ={
        background: 'steelblue',
        color: 'white',
        padding: '1.3rem'
    }

    const styleFrReact2 ={
      
      color: 'white',
      padding: '1.3rem'
  }

  const EXercise = () => {
    return(<div className="text-black bg-secondary mb-3">
    <h1 className={classes.join(' ')}>My Exercise...</h1>
    </div>);
   }

    const ListCard = this.state.media.split('').map((chr, index ) => {
        return(
          <CompNameText 
          TextName={chr}
          clicked={() => this.delCardUp(index)}
          key={index}
          />
        );
      });
  
    const classes = [];
      if (this.state.showExercise === false){
        classes.push('red');
      }
      if (this.state.showExercise2 === false){
        classes.push('bold');
      }
      if (this.state.showSlideShow === false){
          classes.push('App2');
        }
return (
       <div className="App">
       <AnimImgFirst />
       <ParticlesBg type="circle" bg={true} />
       <ReactCSSTransitionGroup transitionName = "fade" 
               transitionEnterTimeout = {500} 
               transitionLeaveTimeout = {500}>
            <div>
            <Spring
              from={{ opacity:1, marginTop:-500}}
              to={{opacity: 0, marginTop:0}}>
               {props => ( <div style={styleFrReact2}>
               <nav className="navbar navbar-expand-xl navbar-light bg-dark">
                <ol> <li><NavLink  className="navbar-brand btn btn-light blockUl" to="/"><span role="img" aria-label="home">🎪</span> </NavLink></li> 
                <li><NavLink  className="navbar-brand btn btn-light blockUl" to="/Counter"><span role="img" aria-label="Counter">🎲</span> </NavLink></li> 
               <li><StyledB className="navbar-brand btn btn-light blockUl" onClick={this.toggleshowSlideShowHandler}><span role="img" aria-label="Diaporama">🎞</span> </StyledB></li>
                <li> <NavLink  className="navbar-brand btn btn-light blockUl" to="/Quizz"><span role="img" aria-label="Smart">📲</span> </NavLink></li> 
                <li> <NavLink  className="navbar-brand btn btn-light blockUl" to="/Galery"><span role="img" aria-label="Picture">📷</span> </NavLink>
                </li>    
                </ol>
                <p style={blockUl}> 
               <StyledBtn clid={this.toggleExerciseHandler}> Exercise 1 </StyledBtn>
              <StyledBtn clid={this.toggleExercise2Handler}> Exercise 2 </StyledBtn>
              <StyledBtn clid={this.toggleAppTestHandler}> Apptest </StyledBtn>
              <StyledBtn clid={this.toggleshowPostHandler}> Appöst </StyledBtn>
              <StyledBtn clid={this.toggleshowPost2Handler}> Appöst2 </StyledBtn> 
              <StyledBtn clid={this.toggleshowSpringEffectHandler}>Spring</StyledBtn>
              <StyledBtn clid={this.toggleAppTest2Handler}> Apptest2 </StyledBtn>     
              <StyledBtn clid={this.toggleGaleryHandler }> AppRo </StyledBtn>  
              </p> </nav>
                  
                  </div>
               )}
               </Spring>
              
                </div>
                </ReactCSSTransitionGroup>
                <Container>
                <div className="card is-fluid">
                <div className="hero">   <hr className="navbar-divider" /></div>
                <div className="hero-body">
                <h2>Deux droites paralléles.</h2><br />
                
                <Switch>
                <Route path="/MySlideShowComponent" component={MySlideShowComponent} />
                <Route path="/Quizz" component={Quizz1} />
                <Route path="/Counter" component={Appt} />
                <Route path="/Galery" component={AppJ} />
                <Route path="/*jk#€23zAt" component={unknown04Error}/>
                </Switch> <br />
                <cite>Utiliser le triangle à deux fois. <br />
                L'unité de mesure sera un tiers de la distance entre les deux droites.
                 En enroulant une corde 4 fois entre les deux points de départ on fabriquera facilement
                  une corde à treize noeuds parfaite pour ce tracé.</cite>
              </div></div>
              <Sound
                    url={soundBeep}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                  />
              </Container>    
      
        
          {this.state.showSlideShow ?
             <div style={styleFrReact}><P1>
            D&egrave;but de journ&egrave;e 09h, arriv&egrave;e en gare de Lieusaint 10h en bus, <br />
            le trajet est coordonn&egrave; par l'a&egrave;rodr&ocirc;mes de villaroche.
            L'heure tourne , le bus n'est toujours pas visible. 
            Quelques personnes sur les bancs, interrogations, discusion, &egrave;change et d&egrave;cision.
            Le taxi nous transporte, file incroyable. Il est maintenant plus de midi.</P1></div>: 
            <CSSTransition
              appear="true"
              transitionEnterTimeout={120}
              transitionLeaveTimeout={250}
              transitionName="fade"
              >
              <Spring 
              from={{ opacity: 1}}
              to={{opacity: 0 }}
              config={{delay: 7000, duration: 10000}}>
              {props => 
              (<div style={styleFrReact}>
              <h2 className="tile">ReactSpring</h2>
            <blockquote>   
            <p>
            "Il est de bonne famille et il a une excellente éducation. Prodigieusement doué pour les mathématiques, a vingt et un ans 
            il publiait une étude sur le binôme de Newton, qui fit sensation dans toute l'Europe et lui valut de devenir titulaire 
            de la chaire de mathématiques dans une de nos petites universités. 
            Tout donnait a penser qu'il allait faire une carriére extrémement brillante. Mais celui-çi avait une hérédité chargée, 
            faisant de lui une sorte de monstre, avec des instincts criminels d'autant plus redoutables qu'ils étaient servis par 
            une intelligence exceptionnelle. "
            Des bruits facheux coururent bientôt sur lui dans l'Université, qui l'obligérent à se démettre.
             Il vint é Londres où il se mit à donner des cours destinés aux officiers de l'armée. <br />
            <bdo>Conan Doyle, Le Dernier Probléme.</bdo>
            </p>
            </blockquote>
            <br />
            <LoguedFacebook />
           </div>)}
            </Spring>
            </CSSTransition>
          }
          
            { this.state.showExercise ?
              <div style={StyleExo}> 
              
              <ol>
              <li>Create TWO new components: UserInput and UserOutput</li>
              <li>UserInput should hold an input element, UserOutput two paragraphs</li>
              <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
              <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
              <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
              <li>Add a method to manipulate the state (=> an event-handler method)</li>
              <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
              <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
              <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
              <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
            </ol>
            {this.EXercise}
              <p style={styleApp}>
             
              <UserInput 
              changed={this.changeNameInputUser}/>
              <UserOutput name={this.state.Exocise[0].name} age={this.state.Exocise[0].age} />
              <UserOutput name={this.state.Exocise[1].name} age={this.state.Exocise[1].age} />   
              <UserOutput name={this.state.Exocise[2].name} age={this.state.Exocise[2].age} />           
              </p></div>:null
            }
            { this.state.showExercise2 ?
            <div style={StyleExo}>
          <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <br />
          {this.EXercise}
          <p style={styleApp}>
          <div className="card text-white bg-secondary mb-3">
              <input className="card-body" type="text" onChange={this.mediaName} /> </div>
              {ListCard}
          
           </p>
           </div>:null
            }
            {this.state.showSlideShow ?
            <div style={StyleSlid}>
                    <MySlideShowComponent />

                </div>:null

            }
             {this.state.showApp ?
            <div style={StyleExo}>
                    <ApliTest /> <TradApp />
                </div>:null

            }
              {this.state.showApp2 ?
            <div style={StyleExo}>
                   <ApliTest2 />
                </div>:null

            }

            {this.state.showApp4 ?
            <div style={StyleExo}>
                <Component1 />
                </div>:null
            }

            {this.state.showPost ?
            <div style={StyleExo}>
                <AppPost />
                </div>:null
            } 
            {this.state.showPost2 ?
            <div style={StyleExo}>
            <Paginatez />
            </div>:null
            }
            {this.state.showApp9 ?
            <div style={StyleExo}>
               <AppR /> 
                </div>:null
            } 
            {this.state.showApp8 ?
            <div style={StyleExo}>
            <AppR />
            </div>:null
            }
        
            <div style={styleFrReact}>
            <center>En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. 
            Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans 
            l’économie numérique, les responsables du présent site internet .
            <i>Indispensable pour les sentiers</i> utiliser
             un baton (ou ruban bien mesurer) et tenez le perpendiculairement </center>
            </div>

    </div>
 
    );
  }
}

export default App;


