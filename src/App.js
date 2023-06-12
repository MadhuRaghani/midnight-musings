import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="App">
      <p>MidnightMusings</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
