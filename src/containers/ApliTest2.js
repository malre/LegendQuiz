import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './ApliTest.css';
import PersonList from '../components/PersonList/PersonList';
import PersonInput from '../components/PersonList/PersonInput';
import PersonDelete from '../components/PersonList/PersonDelete';

class ApliTest2 extends Component {

    render(){
        return(
          
            <div className="ApliTest">
            
            <header className="ApliTest-header">
           
      <div className="ApliTest-log" > 
      <PersonInput /> &nbsp; &nbsp;  <PersonDelete />
           
            </div>
            <PersonList />
            </header>
            </div>
        )
    }

}export default ApliTest2;