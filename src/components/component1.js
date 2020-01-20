import React, { Component } from 'react'
import { Render } from 'react-dom'
import { Spring, Transition} from 'react-spring/renderprops'

export class component1 extends Component {
    
    render() {
        const styleApp={
            backgroundColor: 'lightblue',
            dipslay:'inline-flex',
            padding: '16px', 
              textAlign: 'center', 
              margin: '0.2em', 
              border: '1px solid black',
              
              borderRadius: '0.61em 0.4em 0.61em 0.4em', 
              color: 'steelblue'
      
          }

          const styleApp2={
            backgroundColor: 'steelblue',
            dipslay:'inline-flex',
            padding: '6px', 
            with:'16px',
              textAlign: 'center', 
              margin: '0.2em', 
              
              
              borderRadius: '0.61em 0.4em 0.61em 0.4em', 
              color: 'lightblue'
      
          }
    return (
            <Spring
              from={{ opacity:0, marginTop:-1500, number:0}}
              to={{opacity: 2, marginTop:150, number:200}}>
               {props => (<div style={styleApp}>
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br />
                <b style={styleApp2}>{props.number.toFixed()}</b> 
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
               </p>
            </div>)}
            </Spring>
             
        )
    }
}



export default component1
