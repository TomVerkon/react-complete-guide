import React, { PureComponent } from "react";

import ErrorBoundry from "../ErrorBoundry";
import Person from "./Person/Person";
import Auxillary from '../../hoc/Auxillary';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons] getDerivedStateFromProps ", props, state);
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons] shouldComponentUpdate");
  //   return nextProps.persons !== this.props.persons;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons] getSnapshotBeforeUpdate");
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons] componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons] componentWillUnmount')
  }

  render() {
    console.log("[Persons] render", this.props);
    return this.props.persons.map((person, index) => {
      return (
        // <ErrorBoundry key={person.id}>
          <Person
          key={person.id}
            click={() => {
              this.props.clicked(index);
            }}
            name={person.name}
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)}
          />
        // </ErrorBoundry>
      );
    });
  }
}


// const Persons = (props) =>
// props.persons.map((person, index) => {
//   return (
//     <ErrorBoundry key={person.id}>
//       <Person
//         click={() => {
//           props.clicked(index);
//         }}
//         name={person.name}
//         age={person.age}
//         changed={(event) => props.changed(event, person.id)}
//       />
//     </ErrorBoundry>
//   );
// });

export default Persons;
