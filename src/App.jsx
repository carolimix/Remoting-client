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
    <div className="App" id="demo-wrap" >
      {/* <img className="bg-img" src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80"/> */}
         
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
        path="/spaces/:spacesId"
        element={<Details />} 
        />

        <Route
        path="/spaces/edit/:spacesId"
        elemtent={<Edit />}
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
