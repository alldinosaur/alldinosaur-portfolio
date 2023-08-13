import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <div className="light">
        <Router>
          <Home />
        </Router>
      </div>
    </div>
  );
}

export default App;
