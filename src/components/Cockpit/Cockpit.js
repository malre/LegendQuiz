import React, { useEffect } from 'react';
import StyledButton from '../../containers/Module_css/Modulcss';
import Aux from '../../Hoc/Auxiliary';
import styled from 'styled-components';
import classes from './Cockpit.css';
import './Cockpit.css';

const StylOne = styled.div`
    
    background-color: #77369534;
    min-height: 1.6vh;
    borderTop: 1px solid PeachPuff;
    padding: 18px;
    position: center;

`;

const StylTwo = styled.div`
    
    background-color: #77111534;
    min-height: 1.6vh;
    borderTop: 1px solid PeachPuff;
    padding: 16px;
    position: center;

`;

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
          alert('Signal ! Reflexion Base');
        }, 1000);
        return () => {
          console.log('[Cockpit.js] cleanup work in useEffect');
        };
      }, []);
    
      useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
          console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
      });

    const assignedClasses = [];
    
    if (props.showPersons){
        alert('Merci Authenticated !');
        assignedClasses.push({StylOne});
    }
    if ( props.persons.length <=2 ){
        assignedClasses.push({StylTwo});
    }
    if ( props.persons.length <=1 ){
        assignedClasses.push( classes.bold );
    }
    
    return(
        <Aux>
        <h1 className="Cockpit">{props.title}</h1>
        <p className="App-log">
         <StyledButton alt={props.showPersons} 
        clid={props.clicked}>Switch</StyledButton>
        
        </p>
        </Aux>
    );

};
export default  React.memo(Cockpit);