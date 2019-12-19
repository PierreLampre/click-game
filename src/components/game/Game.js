import React from 'react';
import './game.css';

function Game(props) {

  return (
    <div className="game-container">
      {props.children}
    </div>
  );
}

export default Game;
