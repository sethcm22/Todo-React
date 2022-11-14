import "./App.css";
import Sidebar from "./Sidebar.js";
import ProjectTasks from "./ProjectTasks";
function App() {
  return (
    <div className="App">
      <div className="App-Sidebar">
        <Sidebar />
      </div>
      <div className="App-Tasks">
        <ProjectTasks />
      </div>
    </div>
  );
}

export default App;
