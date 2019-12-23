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
    clickedTrue: [],
    h1: "Simpsons Clicky Game"
  }

  heyTheyWon = () => {
   
    setTimeout(() => {
      this.setState({ message: "Woo-Hoo! You Won!"})
    }, 3000)

    setTimeout();

    this.setState({
      message: "Simpsons Clicky Game"
    })
  }

  heyTheyLost = () => {
   
    setTimeout(() => {
      this.setState({ message: "Doh! You Lost!"})
    }, 3000)

    this.setState({
      message: "Simpsons Clicky Game"
    })
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
  } else if (this.state.clickedTrue.length === 16){
    this.resetGame();
    this.heyTheyWon();
  } else{
    this.resetGame();
    this.heyTheyLost();
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
    this.reSortChars();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.h1}</h1>
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
