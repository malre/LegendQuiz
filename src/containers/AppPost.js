import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Blog from './Blog/Blog';

let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

class AppPost extends Component {
  

  render() {
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Blog />
      </div>
      </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default AppPost;
