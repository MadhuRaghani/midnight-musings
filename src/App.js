import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="bottom-right" newestOnTop />
      <Footer />
    </div>
  );
}

export default App;
