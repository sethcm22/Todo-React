import React, { Component } from "react";
import "./Sidebar.css";
import Header from "./Header.js";
import Project from "./Project";
import { v4 as uuidv4 } from "uuid";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Test Proj",
          id: uuidv4(),
          tasks: [
            {
              taskName: "Test Task",
              id: uuidv4(),
            },
          ],
        },
        {
          title: "Test Proj2",
          id: uuidv4(),
          tasks: [
            {
              taskName: "Test Task",
              id: uuidv4(),
            },
          ],
        },
      ],
    };
  }
  render() {
    const projects = this.state.projects.map((p) => (
      // <li key={p.id}>{p.title}</li>
      <Project key={p.id} title={p.title} />
    ));
    return (
      <div className="Sidebar">
        <Header />
        <h1>SIDEBAR</h1>
        <div className="Sidebar-ProjectList">
          <h3>Project List</h3>
          <button className="Sidebar-ProjectButton" type="button">
            New Project
          </button>
        </div>
        <ul>{projects}</ul>
      </div>
    );
  }
}
export default Sidebar;
