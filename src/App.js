import "./App.css";

import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip>
        <p>
          {" "}
          <h1>Welcome to Tooltip-App</h1>
        </p>
      </Tooltip>
      <Tooltip position="top" content="Thanks for hovering! I'm a tooltip">
        <button>Top</button>
      </Tooltip>
      <Tooltip position="bottom" content="Thanks for hovering! I'm a tooltip">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip position="left" content="Thanks for hovering! I'm a tooltip">
        <button>left</button>
      </Tooltip>
      <Tooltip position="right" content="Thanks for hovering! I'm a tooltip">
        <button>right</button>
      </Tooltip>
    </div>
  );
}

export default App;
