import React, { Component } from 'react';
import Game from "./components/game/Game"
import Pic from "./components/pic/Pic"
import Score from "./components/score/Score"
import './App.css';
import characters from "./characters.json";


class App extends Component {

  state = {
    characters,
    score: 0,
    clickedTrue: []
  }

  reSortChars = () => {
    const characters = this.state.characters.sort(function(a, b){return 0.5 - Math.random()});

    this.setState({ characters });
    console.log("click works");
  }

  whenClicked = id => {
    if(this.state.clickedTrue.indexOf(id) === -1) {
    this.upTheCount();
    this.setState({
      clickedTrue: this.state.clickedTrue.concat(id)
    })
    this.reSortChars();
  } else {
    this.resetGame();
  }
  }

  upTheCount = () => {
    const dynamicScore = this.state.score + 1
    this.setState({
      score: dynamicScore
    })
    console.log("Score increased!");
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedTrue: []
    })
    console.log("Game lost and reset");
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Simpsons Clicky Game</h1>
        </header>
        <Score score = {this.state.score}/>
        <Game>
          {this.state.characters.map(character => (
            <Pic
              reSortChars={this.reSortChars}
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              upTheCount={this.upTheCount}
              resetGame={this.resetGame}
              whenClicked={this.whenClicked}
              />
          ))}
        </Game>
      </div>
    );
  }
}

export default App;
