import React from 'react';
import myImage5 from "http://fotoforum.fr/photos/2020/02/10.13.jpg";
import myImage6 from 'http://fotoforum.fr/photos/2020/02/10.14.jpg';
import myImage8 from 'http://fotoforum.fr/photos/2020/02/10.15.jpg';
import aux from '../../Hoc/Auxiliary';

const UserOutput = (props) => {
   return(   
    <aux className="container">
         <h4 className="card-title">+ For me</h4>
    <p className="card-text">this very nice Exercise --!
    <img src={myImage5} alt=""></img></p>
  
    <h2 className="card-header">My name is {props.name}</h2>
    <div className="card text-white bg-secondary mb-3">
    <img src={myImage6} alt=""></img> 
    <div className="card-body"><img src={myImage8} alt=""></img>
    <h4><i>C'est ton choix</i></h4>
   </div>
   </div>
   </aux>

   );
   
};
export default UserOutput;


