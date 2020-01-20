import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import Aux from '../../Hoc/Auxiliary';

const StyleButton = styled.button`
    backgroundColor: ${props => props.alt ? 'CornflowerBlue' : 'BurlyWood'};
    color: blue;
    dipslay: inline-flex;
    padding:  16px; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    textAlign:  center; 
    margin: 16px; 
    border: 4px solid OldLace;
    -moz-border-radius: 0.31em 0.4em 0.31em 0.4em; 
    border-radius: 0.61em 0.4em 0.61em 0.4em; 
    font-weight: bold;
   
    &:hover{
        background-color:  ${props => props.alt ? 'DarkOrchid' : 'Lavender'};
        color: ${props => props.alt ? 'PeachPuff' : 'steelblue'};
        -moz-border-radius-bottomright: 5px 2.5px; 
        border-bottom-right-radius: 5px 2.5px; 
        border: 1px solid black;
        borderTop: 2px solid green;
        font-style: italic;
        }
`;

const StyledBtn = (props) => {
    return (
        <Aux>
    
        <StyleButton onClick={props.clid}>{props.children}</StyleButton>
        </Aux>
)
};

StyledBtn.PropType = {
    clid : PropType.func,
};

export default StyledBtn;

