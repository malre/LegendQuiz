import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/monokai-sublime.css";
import Compagny from './components/Compagny';
import myprojectimg from './img/myprojectimg';
import Galery from './components/Galery';

const Div1 = styled.div`
  background-color: '#ededed',
  border: 'none',
  display: 'block',
  height: '1px',
  margin: '0.5rem 0'
`
const registeredLanguages = {};
class AppJ extends Component {
    constructor(props) {
        super(props);
    
    this.state = { loaded: false };
    this.codeNode = React.createRef();
 }
 state ={
  admin:'',
  user: '',
  img: ''
}   
     
componentDidMount() {

  this.setState({
    img:myprojectimg[0].img
  });
}

renderGalery() {

  return (
   <Galery
      img={this.state.img}
    />
  );
}
  render() {
    const { language, children } = this.props;
    const { loaded } = this.state;

    if (!loaded) {
      return null;
    } 
    return (
      <div>
      <Div1>
      <h6 className="mb-3">
     
    </h6>
    <div className="next-steps my-5">
        <h2 className="my-5 text-center">What can I do next?</h2>
        <Row className="d-flex justify-content-between"></Row>
        <Compagny />
    </div>  
    <pre className="rounded">
    <code ref={this.codeNode} className={language}>
      {children}
      {this.renderGalery()}
    </code>
  </pre>
      </Div1>
      </div>
    )
  }
  componentDidMount() {
    const { language } = this.props;

    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`);
        hljs.registerLanguage(language, newLanguage);
        registeredLanguages[language] = true;

        this.setState({ loaded: true }, this.highlight);
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register the language ${language}`);
      }
    } else {
      this.setState({ loaded: true });
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    this.codeNode &&
      this.codeNode.current &&
      hljs.highlightBlock(this.codeNode.current);
  };
}
export default AppJ;

