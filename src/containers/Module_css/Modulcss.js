import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyleButton = styled.button`
    background-color: ${props => props.alt ? 'CornflowerBlue' : 'BurlyWood'};
    font: inherit;
    display: inline-block;
    height: 3.5em; width: 24.2em; 
    -moz-border-radius: 0.31em 0.4em 0.31em 0.4em; 
    border-radius: 0.61em 0.4em 0.61em 0.4em; 
    border: 2px solid linen;
    borderTop: 1px solid PeachPuff;
    padding: 18px;
    position: center;
    cursor: pointer;

    &:hover{
      background-color:  ${props => props.alt ? 'DarkOrchid' : 'LemonChiffon'};
      color: ${props => props.alt ? 'PeachPuff' : 'SpringGreen'};
      -moz-border-radius-bottomright: 5px 2.5px; 
      border-bottom-right-radius: 5px 2.5px; 
      border: 4px solid OldLace;
      borderTop: 2px solid green;
    }
`;
const StyledButton = (props) => {
    return (
    <div>
        <StyleButton onClick={props.clid}>{props.children}</StyleButton>
</div>
)
};

StyledButton.PropType = {
    clid : PropType.func,
};

export default StyledButton;