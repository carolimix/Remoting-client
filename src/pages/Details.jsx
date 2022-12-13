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
        <h2>{space.name} </h2>
        <h3>{space.district}</h3>
        <p>{space.description}</p>
        <p>{space.type}</p>
        <p>{space.priceRange}</p>
        <p>{space.openingTimes}</p>
        <p>{space.website}</p>
        <p>{space.petFriendly}</p>
        <p>{space.extras}</p>
           </div>      
      }      
{/*       <Link to="/spaces">Back to all the options</Link> */}
    </div>
  );
}

export default Details;
