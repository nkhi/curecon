import React from 'react'

// emoji "component" to handle the span + aria-label tagging 
// needed for universal browser render support
const Emoji = props => (
  <span 
    style={props.margin ? {margin: '0 8px 0 0'} : {margin: '0'}}
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}>
    {props.symbol}
  </span>
);
  
  export default Emoji;