import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import PostsContextProvider from "./contexts/PostsContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
