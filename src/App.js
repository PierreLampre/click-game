import React, { Component } from 'react';
import Game from "./components/game/Game"
import Pic from "./components/pic/Pic"
import './App.css';
import characters from "./characters.json";

class App extends Component {

  state = {
    characters
  };

  reSortChars = (id) => {
    // const updateCharacters = this.state.characters.map(character => {id == character.id ? character.count++})
    const characters = this.state.characters.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ characters });
    console.log("click works");
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Simpsons Clicky Game</h1>
        </header>
        <Game>
          {this.state.characters.map(character => (
            <Pic
              reSortChars={this.reSortChars}
              key={character.id}
              name={character.name}
              image={character.image}
              />
          ))}
        </Game>
      </div>
    );
  }
}

export default App;
