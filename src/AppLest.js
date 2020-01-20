import React, {Component} from 'react';
import { useSpring, animated } from 'react-spring';


class AppLest extends Component {
 render(){
    const props = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1, color: '#ffaaee'})
          await next({opacity: 0, color: 'rgb(14,26,19)'})
        },
        from: {opacity: 0, color: 'red'}
      })
    return (
         <animated.div style={props}>
         <div> style={styleFrReact}>
            <h1>ReactSpring</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            </div>
            </animated.div>
      
    )
}
} export default AppLest;
const styleFrReact ={
    background: 'steelblue',
    color: 'white',
    padding: '1.3rem'
    }
