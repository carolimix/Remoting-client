import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
    const [space, setSpace] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/spaces${id}`)
          .then((response) => setSpace(response.data))
          .then((res) => {});
      });

    return (
        <div>
            <div className="col-sm-4">
        <div className="card" style={{ width: "20rem", height: "30rem" }}>
          <img src={space.imageUrl} className="card-img-top crdImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{space.name}</h5>
            <h5 className="card-body">{space.district}</h5>
            <h5 className="card-body">{space.description}</h5>
            <h5 className="card-body">{space.type}</h5>
            <h5 className="card-body">{space.priceRange}</h5>
            {/* <h5 className="card-body">{space.openingTimes}</h5> */}
            <h5 className="card-body">{space.website}</h5>
            <h5 className="card-body">{space.petFriendly}</h5>
            <h5 className="card-body">{space.extras}</h5>
            <p>Created By: {space.added_by}</p>
          </div>
        </div>
      </div>
       
        </div>
    );
}

export default Details;