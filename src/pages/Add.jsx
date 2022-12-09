import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkingSpaces from "./WorkingSpaces";

const Add = () => {
    const handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "secure_url" which we can use to update the state
        setImageUrl(response.secure_url);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const [formData, setFormData] = useState({
    name: null,
    district: null,
    description: null,
    type: null,
    priceRange: null,
    openingTimes: null,
    imageUrl: null,
    website: null,
    extras: null,
    petFriendly: null,
    added_by: user._id,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      
              axios
                  .post(`${process.env.REACT_APP_SERVER_URL}/spaces/create`, body)
                  .then((response) => {
                      console.log(
                          "alright, updated with",
                          response,
                          formData
                      );

                      setFormData({});
                      navigate("/spaces");
                  });
          );

      setFormData("");
  };
  formData.image && console.log(formData.image);

     
  return (
    <div>
  <h3>Do you know any nice Working Space and want to add to our list?</h3>
  <h2>You can do it here!</h2>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          /></label>

        <label>District:
            <input
            placeholder="which area?"
            type="text"
            name="district"
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            value={formData.district}
          />
          </label>

          <label>Description:
          <textarea
            placeholder="breve description of the place"
            type="text"
            name="description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          </label>

<p> What type of place is this?</p>
            <label>Public (libraries, etc)
          <input
            type="checkbox"
            name="type"
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            value={formData.type}
          />
          </label>

          <label>Private(cafeterias, etc)
          <input
            type="checkbox"
            name="type"
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            value={formData.type}
          />
          </label>

            <p>Prince Range</p>
            <label>$
          <input
            type="checkbox"
            name="princeRange"
            onChange={(e) =>
              setFormData({ ...formData, priceRange: e.target.value })
            }
            value={formData.priceRange}
          />
          </label>

          <label>$$
          <input
            type="checkbox"
            name="princeRange"
            onChange={(e) =>
              setFormData({ ...formData, priceRange: e.target.value })
            }
            value={formData.priceRange}
          />
          </label>

          <label>$$$
          <input
            type="checkbox"
            name="princeRange"
            onChange={(e) =>
              setFormData({ ...formData, priceRange: e.target.value })
            }
            value={formData.priceRange}
          />
          </label>

{/* <label>Opening Times 🗓️
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) =>
              setFormData({ ...formData, attenuation_level: e.target.value })
            }
            value={formData.attenuation_level}
          />
          </label> */}
          <label>Website or Maps link 🌍
            <input 
            type="text"
            name="website"
            onChange={(e) => setFormData({...formData, website: e.target.value})}
          value={formData.website}
          />
          </label>

<p>Pet Friendly? 🐕 🐈</p>
          <label>Yes
            <input 
            type="checkbox"
            name="petFriendly"
            onChange={(e) => setFormData({...formData, petFriendly: e.target.value})}
          value={formData.petFriendly}
          />            
          </label>

          <label>No💔
            <input 
            type="checkbox"
            name="petFriendly"
            onChange={(e) => setFormData({...formData, petFriendly: e.target.value})}
          value={formData.petFriendly}
          />            
          </label>

          <label>I dont know
            <input 
            type="checkbox"
            name="petFriendly"
            onChange={(e) => setFormData({...formData, petFriendly: e.target.value})}
          value={formData.petFriendly}
          />            
          </label>

<label>Extras:
          <textarea
            placeholder="extra info like bad wifi, too loud to work, etc."
            type="text"
            name="extras"
            onChange={(e) =>
              setFormData({ ...formData, extras: e.target.value })
            }
            value={formData.extras}
          />
          </label>

          <label>Image:
            <input
            type="file"
            name="imageUrl"
            onChange={(e) =>
              setImage(e.target.files[0])}
              value={formData.imageUrl}
            />
          </label>

          <br />
          <button type="submit">
           Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
