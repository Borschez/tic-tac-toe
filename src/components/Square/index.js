import React from "react";

import './style.css'

const Square = (props) => {
    return (
        <button className="square-button" onClick={props.onClick}>{props.value}</button>
    );    
}

export default Square;