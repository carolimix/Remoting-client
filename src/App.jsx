import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import WorkingSpaces from "./pages/WorkingSpaces";
import Add from "./pages/Add";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
              
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        { <Route
        path="/spaces"
        element= {
          <WorkingSpaces />
        }
        />}

        <Route
         path="/profile" 
         element={<IsPrivate>      
        <Profile />
        </IsPrivate>
          }
        />
        <Route
        path="/edit/:spacesId"
        element={<Edit />}
        />

        <Route
        path="/spaces/:spacesId"
        element={<Details />} 
        />




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
      <Footer />
    </div>

   );
}

export default App;
