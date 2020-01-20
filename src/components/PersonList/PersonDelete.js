import React from 'react';
import axios from 'axios';

export default class PersonDelete extends React.Component {
    state ={
        id : 0,
        
       };

       handleChange = event => {
           this.setState({id: event.target.value });
       }
      handleDelete = event => {
          event.preventDefault();

          axios
          .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
      };

     render(){
         return(
             <form onSubmit={this.handleDelete}>

                 <label>Person Id :
                     <input type="number" name="id" onChange={this.handleChange}/>
                 </label>
                 <button type="submit">Delete</button>
             </form>
         )
     }
}