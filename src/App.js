import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name:"Tom", age: "70"},
      {name: "Denise", age: "64"},
      {name: "Ashley", age: "35"},
    ],
    otherState: 'Some value goes here'
  }

  switchNameHandler =  () => {
    let newPersons = {persons: [
      {name:"Thomas", age: "70"},
      {name: "Cupcake", age: "64"},
      {name: "Pie", age: "35"},
    ]}
    this.setState(newPersons)
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button onClick={this.switchNameHandler}>Switch State</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies are Music and COmputer Programming!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby isPAPA!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I'm a vegan!!!</Person>
      </div>
    );
  }
}

export default App;
