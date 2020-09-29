import React, { useEffect, memo, Fragment } from "react";
import classes from "./CockPit.module.css";
//import Auxillary from "../../hoc/Auxillary";

const CockPit = (props) => {
  // this runs everytime CockPit is rendered
  // use this in a functional component instead
  // of componentDidUpdate in a class component
  useEffect(() => {
    console.log("[CockPit] useEffect");
    // setTimeout(() => {
    //   alert("[CockPit] useEffect()");
    // }, 1000);
    return () => {
      console.log("[CockPit] cleanup work in useEffect 1");
    };
  }, []);

  useEffect(() => {
    console.log("[CockPit] 2nd useEffect");
    return () => {
      console.log("[CockPit] cleanup work in useEffect 2");
    };
  });

  let assignedClasses = [];
  let btnClasses = "";
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <Fragment>
      <div className={classes.CockPit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClasses} onClick={props.toggle}>
          Toggle persons
        </button>
      </div>
      <div>
        <p>This is here just to demo Auxillary!</p>
      </div>
    </Fragment>
  );
};

export default memo(CockPit);
//export default CockPit
