import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Controls : {props.value}
        <br />
       
    </div>
);

export default counterOutput;

////<LineChart data={{
  //  "2019-12-10": 11, 
  //  "2019-11-10": 6,
  //  "2019-10-10":11,
  //  "2019-9-10": 11, 
  //  "2019-8-10": {props.value},
  //  "2019-7-10":11,
  //  "2019-6-10": 11, 
  //  "2019-5-10": 6,
  //  "2019-4-10":11
// }} />