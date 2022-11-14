import React, { Component } from "react";
import "./ProjectTasks.css";
class ProjectTasks extends Component {
  render() {
    return (
      <div className="ProjectTasks">
        <div className="ProjectTasks-Header">
          All Tasks
          <button type="button">Add Task</button>
        </div>
      </div>
    );
  }
}
export default ProjectTasks;
