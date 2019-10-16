import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(response => {
      this.setState({ pokemons: response.data.results }, () =>
        console.log(this.state)
      );
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.pokemons.map(poke => (
            <div>
              <li>{poke.name}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
