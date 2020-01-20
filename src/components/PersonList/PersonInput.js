import React from 'react';
import axios from 'axios';
//import instance from './reults';

export default class PersonInput extends React.Component {
    state ={
        id:0,
        name : ' ',
        purchasable: false,
        purchasing: false,
        loading: false
        
       };

    postDataHandler = (e) => {
       
        // alert('You continue!');
        this.setState( { loading: true } );
        const user = {
            name:this.e.target.name,
            customer: {
                id:12,
                address: {
                    street: 'Teststreet 2',
                    zipCode: '41351',
                    country: 'Holland'
                },
                email: 'test-1@test.com'
            },
            deliveryMethod: 'fastest'
        }
         axios.post( 'https://management-development-1b6c3.firebaseio.com/user.json', user )
             .then( response => {
                 this.setState({ loading: false, purchasing: false });
                 console.log(response);
             } )
             .catch( error => {
                 this.setState({ loading: false, purchasing: false });
                 console.log(error);
             } );
    }

       handleChange = event => {
           this.setState({name: event.target.value });
       }
      handleSubmit = event => {
          event.preventDefault();

          const user = {
              name :this.state.name,
          };
          axios
          .post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
      };

     render(){
         return(
             <form onSubmit={this.postDataHandler}>

                 <label>Person Name:
                     <input type="text" name="name" onChange={this.handleChange}/>
                 </label>
                 <button type="submit">Add</button>
             </form>
         )
     }
}