import React from 'react';
import axios from 'axios';
import '../Cockpit/Cockpit.css';
import Aux from '../../Hoc/Auxiliary';
//import instance from './reults';

export default class PersonList extends React.Component {
    constructor(props){
        super(props);
      }

    state ={
        persons: [], 
       };

       componentDidMount() {
          axios.get(`https://management-development-1b6c3.firebaseio.com/user.json`)
           //instance.get('/user.json')
           .then(res =>
           {console.log(res);
            this.setState({persons: res.data});
        });
       }
     render(){
         return(
             <Aux>

             <ul>
                 {this.state.persons.map(person =>
                  (<li className="RCockpit" key={person.id}>{person.name}</li>
                  ))}
             </ul>
             <br />
             {this.props.appTitle}
             </Aux>
         )
     }
}