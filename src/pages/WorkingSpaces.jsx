import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Add from './Add';
import axios from 'axios';
import Details from './Details';

function WorkingSpaces() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/spaces`)
      .then((response) => setData(response.data))
  }, []);
    return (
        <div>
            <h1>Here you can see all the available options we could gather</h1>
            <h2>If you know any other ones please add them here <Link to="/add" > <button> 💻 </button></Link></h2>
            <div>
        {data &&
          data.map((space) => (
                <div
                  className="card"
                  style={{ width: "20rem", height: "30rem" }}
                >                  
                  <div className="card-body">
                  <Link to={`/spaces/${space._id}`}>
                    <h5 className="card-title">{space.name}</h5>
                    <img className="img-card" src={space.imageUrl} alt="Image of the place" /> 
                    </Link>
                    <h5 className="card-body">{space.type}</h5>
                    <Link to=""><p className="card-body">{space.website}</p></Link>               
  
                  </div>
                </div>
        
   
          ))}
      </div>
      </div>
           
          
    );
};


export default WorkingSpaces;