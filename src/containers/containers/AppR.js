import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Courses from './Courses/Courses';
import Lurker from './Users/Lurker';
import Users from './Users/Users';
import Quizz1 from '../../AnimImg/quizz/Quizz1';
import AppJ from '../../AnimImg/bexai/AppJ';
import unknown04Error from './error404/handler404';
//import '../bootstrap.min.css';
import '../../AnimImg/quizz/css/bulma.css';
import Appt from '../../AnimImg/rdx/App';

class AppR extends Component { 

  render () {
    return (
      <div className="App">
         <nav className="navbar xl navbar-light bg-primary">  
         <NavLink  className="navbar-brand btn btn-dark bg-primary" to="/" >Home</NavLink>  
       <NavLink className="navbar-brand btn btn-light bg-primary" to="/courses/users" exact >Users</NavLink>
       <NavLink  className="navbar-brand btn btn-light bg-primary" to="/courses/lurker" >lurker</NavLink>
       <NavLink  className="navbar-brand btn btn-light bg-primary" to="/Courses" >Courses</NavLink>
       <NavLink  className="navbar-brand btn btn-light bg-primary" to="/ReedSalomon" >ReduxMobbx</NavLink>
       <NavLink  className="navbar-brand btn btn-light bg-primary" to="/ReedSolv" >ReedSolv</NavLink>
       <NavLink  className="navbar-brand btn btn-light bg-primary" to="/ImgIdea" >ImgIdea</NavLink>
         <NavLink  className="navbar-brand btn btn-light bg-primary" to="/Quizzr" >quizz</NavLink>
        </nav>
         <div className="container">
         
          <div className="card border-primary"><ol className="content" style={{textAlign: 'left', listStyle: 'none'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component 
            in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or 
            score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        </div>
        <div className="container is-fluid">
        <div className="hero"> <hr className="navbar-divider" /></div>
        <div className="hero-body">
             
      
        <Switch>
        <Route path="/courses/lurker" component={Lurker} />
        <Route path="/courses/users" component={Users} />
        {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
        <Route path="/Quizzr" component={Quizz1} />
        <Route path="/ReedSalomon" component={Appt} />
        <Route path="/ReedSolv" component={AppJ} />
         <Route path="/hello" component={unknown04Error}/>
        </Switch>
      </div></div>
      
         </div></div>
    )}
}

export default AppR;
