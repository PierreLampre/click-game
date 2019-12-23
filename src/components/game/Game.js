import React from 'react';
import './game.css';

function Game(props) {

  return (
    <div className="game-container" id="game-container">
      {props.children}
      <h1 id="uwin">You Win!</h1>
      <h1 id="ulost">Doh, You Lost!</h1>
    </div>
  );
}

export default Game;
