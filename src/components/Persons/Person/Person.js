import React, { Component } from "react";
import PropTypes from 'prop-types';

import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log("[Person] render ", this.props);
    return (
      <div className={classes.person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}


// const Person = (props) => {
//   return (
//     <div className={classes.person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

export default withClass(Person, classes.Person);
