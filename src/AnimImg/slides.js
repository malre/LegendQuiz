/*import {  Component, render } from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

export class slide extends Component {
    render() {
              
const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
    { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
  ]
  const P1 = styled.p`
color: white;
font-size: 1.9em;
vertical-align: baseline;
padding: 10px;
text-align: left; 
font-family: 'SeaFire';
    src: url(${mainFont}) format('truetype');
    src: url(${mainFontEot}) format('embedded-opentype'),
    src: url('./Fonts/SeaFire.woff') format('woff'),
    src: url('./Fonts/SeaFire.svg') format('svg'); 
   
@font-face {
    font-family: 'SeaFire';
    src: url(${mainFont}) format('truetype');
}
` 
      const blockUl={
      //display: 'inline-flex',
      backgroudColor:'linen',
      flexDirection: 'row',
      fontSize: '2rem',
      size: 'contain'
      }
    const styleFrReact ={
        background: 'steelblue',
        color: 'white',
        padding: '1.3rem'
    }

     <div style={styleFrReact}><P1>
            D&egrave;but de journ&egrave;e 09h, arriv&egrave;e en gare de Lieusaint 10h en bus, <br />
            le trajet est coordonn&egrave; par l'a&egrave;rodr&ocirc;mes de villaroche.
            L'heure tourne , le bus n'est toujours pas visible. 
            Quelques personnes sur les bancs, interrogations, discusion, &egrave;change et d&egrave;cision.
            Le taxi nous transporte, file incroyable. Il est maintenant plus de midi.</P1></div>: 
          
  const Slide = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return transitions.map(({ item, props, key }) => (
      <animated.div
        key={key}
        class="bg"
        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
      />
    ))
  }
       return (
           <Slide />
       ) 
    }
}

export default slide;
*/

