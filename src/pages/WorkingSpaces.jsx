import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
import axios from "axios";
import Details from "./Details";
import { AuthContext } from "../context/auth.context";
import Search from "../components/Search";

function WorkingSpaces() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(false);
  const { user } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/spaces`)
      .then((response) => setData(response.data));
  }, []);

  const handleLike = (id) => {
    const foundedSpace = data.find((space) => {
      return space._id == id;
    });
    /* const requestBody = foundedSpace.likes; */
    if (foundedSpace.likes.includes(user.name)) {
      setMessage(true);
      return;
    } else if (user) {
      const requestBody = user.name
      /* user && foundedSpace.likes.push(user.name); */

      console.log(requestBody);
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/${id}/addlike`, {
          username: requestBody,
        })
        .then(() => {
          axios
          .get(`${process.env.REACT_APP_SERVER_URL}/spaces`)
          .then((response) => setData(response.data));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="bg-slate-200">
      <h1>Here you can see all the available options we could gather</h1>
      <h2>
        If you know any other ones please add them here{" "}
        <Link to="/add">
          {" "}
          <button> 💻 </button>
        </Link>
      </h2>
      <Search setSearch={setSearch} search={search}/>
      <div className="container w-screen px-2 md:px-12 my-6 mx-auto">
      <div className="flex item-stretch flex-wrap -mx-1 lg:-mx-2">
        {data &&
          data
          .filter(space=> {
            if (!space.district) {
                return false;
            } else if (!space.name) {
                return true;
            } else {
                return (
                    space.name.toLowerCase().includes(search.toLowerCase()) ||
                    space.district.toLowerCase().includes(search.toLowerCase())
                )};
            })
          .map((space) => (
            <div className="my-1 mx-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 ">
              <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 p-3">
                <Link to={`/spaces/${space._id}`}>
                  <h5 className="hover:opacity-50">{space.name}</h5>
                  <img
                    className="img-card"
                    src={space.imageUrl}
                    alt="Image of the place"
                  />
                </Link>
                <h5 className="">{space.type}</h5>
                <Link to="">
                  <p className="">{space.website}</p>
                </Link>
                <button onClick={() => handleLike(space._id)}>
                ♡{space.likes.length}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default WorkingSpaces;
