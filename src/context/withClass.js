import React from 'react';

const withClass = (WrappedComponent, className) =>
{ 
    return props => (
    <div className={props.classes}><WrappedComponent {...props}/></div>
);
    };
export default withClass;