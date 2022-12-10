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
console.log(data)
    return (
        <div>
            <h1>Here you can see all the available options we could gather</h1>
            <h2>If you know any other ones please add them here <Link to="/add" > <button> 💻 </button></Link></h2>
            <div className="row g-3">
        {data &&
          data.map((space) => (
            <div className="col-sm-4">
              <Link to={`/spaces/${space._id}`}>
                <div
                  className="card"
                  style={{ width: "20rem", height: "30rem" }}
                >
                  
                  <div className="card-body">
                    <h5 className="card-title">{space.name}</h5>
                    <h5 className="card-body">{space.district}</h5>
                    <h5 className="card-body">{space.description}</h5>
                    <h5 className="card-body">{space.priceRange[0]}</h5>
                    <img src={space.imageUrl} alt="Image of the place" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      </div>
           
          
    );
};


export default WorkingSpaces;