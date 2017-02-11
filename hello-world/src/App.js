import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var people = [{name: 'abe'}, {name: 'ben'}, {name: 'cat'}, {name: 'dave'}, {name: 'joe'}, {name: 'smoe'}];

class Card extends Component {
  render() {
    return (
        <div>
          <h2>{this.props.name}</h2>
          <button onClick={this.props.onClick}>Delete Me</button>
        </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {people};
  }

  deletePerson(person) {
    this.state.people.splice(this.state.people.indexOf(person), 1);
    this.setState({people: this.state.people});
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, key) => {
          return (
              <Card key={key} name={person.name} onClick={this.deletePerson.bind(this, person)}/>
          )
        })}
      </div>
    );
  }
}

export default App;
