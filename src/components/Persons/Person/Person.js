import React, {Component} from 'react';
import Aux from '../../../Hoc/Auxiliary';
import './Person.css';
import withClass from '../../../context/withClass';
import classes from './Person.css';
//import PropType from 'prop-Types';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering ...');
    return (
        
    <Aux>
        <div className="Person" >
        {this.props.isAuth ? () => { alert('Merci de vous êtres identifier');} : <p> Please log in</p>}
    <p key="i1">I'm {this.props.name} and i learn React and i try 
    {Math.floor(Math.random()*190)} <u onClick={this.props.click}>to understand</u>, <br />
     today i have {this.props.age} years old.<br />
     {this.props.child}<br />
     <p key="i2">{this.props.children}</p>
     <input key="i3" type="text" onChange={this.props.changed} 
     //value={this.props.name} 
     />
     </p>
     </div>
     </Aux>
    );
    }
}
/*Person.propType = {
    name : PropType.string,
    click : PropType.func,
    age : PropType.number,
    child : PropType.string
};*/
export default withClass(Person, classes.Person);