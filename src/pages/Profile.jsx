import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useState } from "react";

function Profile() {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user/${user._id}`)
      .then((response) => {
        console.log(response);
        const oneUser = response.data
        setCurrentUser( 
          oneUser?.likedSpaces.filter((x,i, s) => i === s.findIndex((t)=> (
          t.name === x.name
        ))))
        
      });
  }, [user]);


  currentUser && console.log(currentUser)

  return (
    <div className="bg-blue-50 items-center container w-6/12 px-2 my-6">
      <div className="">
        {currentUser &&
          currentUser?.map((space) => (
            <div className="bg-blue-50 items-center container w-6/12 px-2 my-6">
              <div className="">
                {space && (
                  <div className="">
                    <img
                      src={space?.imageUrl}
                      alt="Image of the place"
                      className="rounded-lg"
                    />
                    <h2>
                      -<strong>{space?.name}</strong>-
                    </h2>
                    <h3>📍{space?.district}</h3>
                    <p>{space?.description}</p>
                    <p>☕{space?.type}</p>
                    {/*  <p>{space.priceRange}</p> */}
                    <a href={space?.website} target="_blank">
                      {space?.website}
                    </a>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{space?.type}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{space?.district}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #petFriendly
                      </span>
                    </div>
                    <a href={space?.openingTimes} target="_blank">
                      👉Get there!
                    </a>
                    <p>
                      <i>💬"{space?.extras}"</i>
                    </p>
                  </div>
                )}
              </div>
             
            </div>
          ))}{" "}
      </div>
    </div>
  );
}

export default Profile;
