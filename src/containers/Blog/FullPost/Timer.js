import React, { Component } from 'react';
import { styled } from "styletron-react";


export default class Timer extends Component {
    state={
        secondsElapsed: 0
    }
    getInitialize(){
        return{
        secondsElapsed: Number(this.props.startTime) || 0
        };
    }
    tick(){
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 0.1
        });
    }
    componentDidMount(){
        this.interval  = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnMount(){
        clearInterval(this.interval);
    }

    render() {
        const p = styled("p", props => ({
            padding: "0.5em 1em",
            fontSize: "1em",
            borderRadius: "4px",
            border: "1px solid #aaa",
            
          }));
          

        const divStlye ={
            color: 'white',
            margin: 'auto',
            background: 'linear-gradient(32deg, lightcoral 20%, rgb(146, 132, 150) 65%)'

        };
        return (
            <div style={divStlye} >
                <p>
                seconds Elapsed: {this.state.secondsElapsed.toFixed(2)}

                </p>
            </div>
        );
    }
};
