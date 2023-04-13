import { Route, Routes } from "react-router";
import "./App.css";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";
import Getaxios from "./Getaxios";
import Async from "./Async";
function App() {
  return (
    <>
      <div className="main">
        <h1>There are three ways to access api which are listed here</h1>
        <Link to="/Fetch">
          <button>Fetch API</button>
        </Link>
        <Link to="/Getaxios">
          <button>Axios API</button>
        </Link>
        <Link to="/Async">
          <button>Async API</button>
        </Link>
        <Routes>
          <Route path="/Fetch" element={<Fetch />}></Route>
          <Route path="/Getaxios" element={<Getaxios />}></Route>
          <Route path="/Async" element={<Async />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
