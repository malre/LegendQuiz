import React from 'react';


const UserInput = (props) => {
   const StyleIso={
      backgroundColor: 'green',
      color:'black',
      dipslay:'inline-flex',
      padding: '10px', 
        textAlign: 'left', 
        margin: '12px', 
        borderRightColor: '1px solid blue',
        borderLeftColor: '2px solid violet',
        borderTopColor: '3px solid violet'
    } 
     return(
    
      <div className="card text-white bg-secondary mb-3">  <h4><i>Votre choix :</i></h4>
        <input className="card-title" style={StyleIso} type="text" onChange={props.changed} value={props.name} />
        </div>
     );


};
export default UserInput;