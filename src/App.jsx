import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";


import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import WorkingSpaces from "./pages/WorkingSpaces";
import Add from "./pages/Add";

import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {

  return (
    <div className="App">
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />

            { <Route
            path="/spaces"
            element= {
              <WorkingSpaces />
            }
            />}

        <Route 
          path="/about" 
        element= {<About />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />

        {  <Route
          path="/add"
          element= {            
              <Add />
                      }
          />}




      </Routes>
    </div>
  );
}

export default App;
