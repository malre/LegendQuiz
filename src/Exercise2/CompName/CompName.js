import React from 'react';
import Aux from '../../Hoc/Auxiliary';

const CompNameText = (props) => {
const styleApp = {
    display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black',
        fontSize : '32px'
}    

 return(
  <Aux>
  <div className="card-title bg-secondary mb-2" style={styleApp} onClick={props.clicked}>{props.TextName}</div>
    </Aux>
 );

};
export default CompNameText;