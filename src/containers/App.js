import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import CockPit from "../components/cockpit/CockPit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 20, name: "Max", age: 28 },
      { id: 21, name: "Manu", age: 29 },
      { id: 22, name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockPit: true,
  };

  static getDerivedStateFromProps(state, props) {
    console.log("[App getDervidedStateFromProps ", props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App] componentWillMount, deprecated, do not use');
  // }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

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
    console.log("[App render()", this.props);
    // conditionally render Persons component
    let personDiv = null;
    if (this.state.showPersons) {
      personDiv = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changedNameHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockPit: !this.state.showCockPit });
          }}
        >
          Remove CockPit
        </button>
        {this.state.showCockPit ? (
          <CockPit
            appTitle={this.props.appTitle}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
          />
        ) : null}
        {personDiv}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
