import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { AuthContext } from "./contexts/AuthContext";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";
import UsersProfile from "./pages/users/UsersProfile";
import "./App.css";
import PostsPage from "./pages/posts/PostsPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <Bookmark />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <PrivateRoute>
              <UsersProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <PrivateRoute>
              <PostsPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer position="bottom-right" newestOnTop />
      <Footer />
    </div>
  );
}

export default App;
