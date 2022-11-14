import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <li key={this.props.id}>{this.props.title}</li>;
  }
}
export default Project;
