import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 20, name: "Max", age: 28 },
      { id: 21, name: "Manu", age: 29 },
      { id: 22, name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // alternative
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // The following 3 lines is not the way to handle this
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // this.setState({ persons: persons });
    //
    // This is the way to handle it. By updating state immutably
    // copy the state.persons array to _persons
    // The next two lines are equivalent, your preference as to which one to use
    // the second line is the most current way to copy an array
    // const _persons = this.state.persons.slice();
    const _persons = [...this.state.persons];
    _persons.splice(personIndex, 1);
    this.setState({ persons: _persons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let personDiv = null;
    let changeNameButton = null;

    if (this.state.showPersons) {
      personDiv = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => {
                  this.deletePersonHandler(index);
                }}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changedNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {personDiv}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
