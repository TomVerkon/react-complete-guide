import React, { Component } from "react";

class ErrorBoundry extends Component {

  state = {
    hasErrror: false,
    errorMsg: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMsg: error});
  }
  render() {
    if (this.state.hasErrror) 
      return <h1>{this.state.errorMsg}</h1>;
    else
      return this.props.children;
  }

}

export default ErrorBoundry;
