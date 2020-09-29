import React from 'react';

//const WithClass = props => <div className={props.classNames}>{props.children}</div>

// alternative implementation as just a function
const withClass = (WrappedClass, classNames) => {
  return props => (
    <div className={classNames}><WrappedClass {...props}/></div>
  );
}

export default withClass;