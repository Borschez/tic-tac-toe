import React from "react";
import Square from "../Square";

import './style.css'

const Board = (props) => {
    const {squares, onSquareClick} = props;

    return (<div className="board-container">
        {squares.map((square, i) => (<Square key={i} value={square} onClick={() => onSquareClick(i)}/>))}        
    </div>);
}

export default Board;