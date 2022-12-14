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
    <div className="bg-red-100 items-center container w-screen px-2 md:px-12 my-6 mx-auto">
      <div className="flex item-stretch -mx-1 lg:-mx-2">
        {space && (
          <div className="my-1 mx-1 px-1 w-full md: w-1/3 lg:my-4 lg:px-4 lg:w-1/5">
            <img src={space.imageUrl} alt="Image of the place" />
            <h2>-{space.name}-</h2>
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
     <Link to={`/edit/${space._id}`}><button>Edit</button></Link>     
    </div>
  );
}

export default Details;
