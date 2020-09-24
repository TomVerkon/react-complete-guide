import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = prop => {

  const [state, setState] = useState({
    persons: [
      { name: "Tom", age: "70" },
      { name: "Denise", age: "64" },
      { name: "Ashley", age: "35" },
    ]
  });

  const [otherState, setOtherState] = useState(
    {otherState: 'Some other state'}
  )

  const switchNameHandler = () => {
    let newPersons = {
      persons: [
        { name: "Thomas", age: "70" },
        { name: "Cupcake", age: "64" },
        { name: "Pie", age: "35" },
      ],
    };
    setState(newPersons);
  };

  console.log(state, otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <button onClick={switchNameHandler}>Switch State</button>
      <Person name={state.persons[0].name} age={state.persons[0].age}>
        My Hobbies are Music and Computer Programming!
      </Person>
      <Person name={state.persons[1].name} age={state.persons[1].age}>
        My Hobby is PAPA!
      </Person>
      <Person name={state.persons[2].name} age={state.persons[2].age}>
        I'm a vegan!!!
      </Person>
    </div>
  );
};

export default App;
