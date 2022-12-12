import React, { useEffect, useState, Link } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const [space, setSpace] = useState({});
  const { spacesId } = useParams();

  const getSpace = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/spaces/${spacesId}`)
      .then((response) => {
        console.log(response);
        const oneSpace = response.data;
        setSpace(oneSpace);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSpace();
  }, []);

  return (
    <div className="spacesDetails">
           {space && 
      <div className="card"
      style={{ width: "20rem", height: "30rem" }}>
        <img className="img-card" src={space.imageUrl} alt="Image of the place" /> 
        <h2>{ space.name } </h2>
        <h3>{ space.district }</h3>
        <p>{ space.description }</p>
        <p>{ }</p>
      
      
      
      
      </div>
       /*  <div className="col-sm-4">
          <div className="card" style={{ width: "20rem", height: "30rem" }}>
            <img
              src={space.imageUrl}
              className="card-img-top crdImg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{space.name}</h5>
              <h5 className="card-body">{space.district}</h5>
              <h5 className="card-body">{space.description}</h5>
              <h5 className="card-body">{space.type}</h5>
              <h5 className="card-body">{space.priceRange}</h5>
              <h5 className="card-body">{space.openingTimes}</h5>
              <h5 className="card-body">{space.website}</h5>
              <h5 className="card-body">{space.petFriendly}</h5>
              <h5 className="card-body">{space.extras}</h5>
            </div>
            <Link to="/spaces">Back to all the options</Link>
          </div>
        </div> */
      }
    </div>
  );
}

export default Details;
