import "./App.css";

import { handleDecrement, handleIncrement } from "./bundle";

function App() {
  return (
    <div>
      <body>
        <h1>Magic the Gathering Health Counter</h1>
        <button class="button" onClick={handleIncrement}>
          Increment
        </button>
        <button class="button" onClick={handleDecrement}>
          Decrement
        </button>
        <div>
          <h3>Health</h3>
          <p id="health" style={{ fontSize: 40 }} >20</p>
        </div>
      </body>
    </div>
  );
}

export default App;
