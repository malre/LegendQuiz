import React, { Component } from 'react';

import Select from 'react-select';
import { options } from './config';

export class TradApp extends Component {
constructor(props) {
    super(props);
    
  }

render() {
   
return (
      <div className="App-Root">
        <Select
          defaultValue={options[0]}
          options={options}
                
          className="App-Select"
        />
        <h3 className="text-center pt-5">
          Welcome to React Translation
        </h3>
      </div>
    );
  }
}
export default TradApp;