import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Edit from "./Edit";

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
    <div className="bg-blue-50 items-center container w-6/12 px-2 my-6">
      <div className="">
        {space && (
          <div className="">
            <img src={space.imageUrl} alt="Image of the place" className="rounded-lg" />
            <h2>-<strong>{space.name}</strong>-</h2>
            <h3>📍{space.district}</h3>
            <p>{space.description}</p>
            <p>☕{space.type}</p>
           {/*  <p>{space.priceRange}</p> */}
            <a href={space.website} target="_blank">{space.website}</a>
            <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{space.type}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{space.district}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#petFriendly</span>
      </div>
            <p><i>"{space.extras}"</i></p>
          </div>
        )}
      </div>
      <div className="relative h-32 w-32 pb-0">
     <Link to={`/edit/${space._id}`}><button>Edit</button></Link>   
     </div>  
    </div>
  );
}

export default Details;
