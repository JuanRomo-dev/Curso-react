import './App.css';
import React, { useState } from 'react';

const TURNS = {
    X: 'x',
    O: 'o'
}

const Square = ({ children, updateBoard, index }) => {
    return (
        <div className='square'>
            {children}
        </div>
    )
}

export const App2 = () => {
    const [board, setBoard] = useState(Array(9).fill(null));

    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key = {index}
                                index = {index}>
                                    {board[index]}
                            </Square>
                        )  
                    })
                }
            </section>
        </main>
    );         
}
