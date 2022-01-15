import React, { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../helper";

import './style.css'

const Game = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)

    const handleSquareClick = (index) => {
        const boardCopy = board.concat();

        if (winner || boardCopy[index]) return;
        
        boardCopy[index] = xIsNext? 'X' : 'O'

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const clearBoard = () => {
        return (
            <button className="clear-btn" onClick={() => {setBoard(Array(9).fill(null)); setXIsNext(true)}}>Clear Board</button>
        )
    }

    return (<div className="game-container">
        {clearBoard()}
        <Board squares={board} onSquareClick={handleSquareClick}/>
        <p className="game-info">
            {winner ? `Winner is: ${winner}` : `Now is turn ${xIsNext? 'X': 'O'}`}
        </p>
    </div>);
}

export default Game;