import React, { Component } from "react";

class CategoryHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNumber: this.props.categoryNumber,
      old_pokemons: this.props.old_pokemons,
      new_pokemons: this.props.new_pokemons,
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.old_pokemons.map((id, index) => {
            <li key={index}> {id}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CategoryHolder;
