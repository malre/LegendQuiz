import React from 'react';
import aux from '../../Hoc/Auxiliary';

const UserOutput = (props) => {
   return(   
    <aux className="container">
    <h2 className="card-header">My name is {props.name}</h2>
    <div className="card text-white bg-secondary mb-3">
    <div className="card-body">
    <h4 className="card-title">+ For me</h4>
    <p className="card-text">this very nice Exercise --!</p>
   </div>
   </div>
   </aux>

   );
   
};
export default UserOutput;

