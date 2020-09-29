import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import CockPit from "../components/cockpit/CockPit";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";

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
    changeCounter: 0,
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
      // although this is called synchronously it is not guaranteed to execute immediately
    // so setState should be written as follows if a new state property depends on a prev state property
    const name = event.target.value;
    this.setState((prevState, props) => {
      const personIndex = prevState.persons.findIndex((person) => {
        return person.id === id;
      });
  
      const person = { ...prevState.persons[personIndex] };
      // alternative
      // const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = name;
      const persons = [...prevState.persons];
      persons[personIndex] = person;
  
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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
      <Auxillary>
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
      </Auxillary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
