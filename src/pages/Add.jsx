import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkingSpaces from "./WorkingSpaces";
import service from "../api/service";

const Add = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
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
    });

    const handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        setImageUrl(response.secure_url);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = e => {
    e.preventDefault();      
              axios
                  .post(`${process.env.REACT_APP_SERVER_URL}/spaces/create`, formData)
                  .then((response) => {
                      console.log(
                          "alright, updated with", response, formData);
                      setFormData({});
                      navigate("/spaces");
                  });
                    };

  return (
    <div>
  <h3>Do you know any nice Working Space and want to add to our list?</h3>
  <h2>You can do it here!</h2>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
          <input type="text" name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          /></label>
          <br />

        <label>District:
            <input placeholder="which area?" type="text" name="district"
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            value={formData.district}
          />
          </label>
          <br />

          <label>Description:
          <textarea
            placeholder="breve description of the place" type="text" name="description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          </label>
          <br />

        <label>Type of place:            
         <select id="type" name="type">
          onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
          <option value={formData.type}> Public</option>
          <option value={formData.type}> Private</option>
          </select>
          </label>
  <br />

            <label>Prince Range
          <select id="priceRange" name="priceRange">
          onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
          <option value={formData.priceRange}> $</option>
          <option value={formData.priceRange}> $$</option>
          <option value={formData.priceRange}>$$$</option>
          </select>
          </label>
          <br />

          

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
<br />

          <label>Pet Friendly? 🐕 🐈            
          <select id="petFriendly" name="petFriendly">
          onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
          <option value={formData.petFriendly}> Yes</option>
          <option value={formData.petFriendly}> No</option>
          <option value={formData.petFriendly}>I don't know</option>
          </select>
          </label>
        
        <br />

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

        <br />
    <b>Can you share an image of the place?</b>
            <input type="file" onChange={(e) => handleFileUpload(e)}/>
        

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
