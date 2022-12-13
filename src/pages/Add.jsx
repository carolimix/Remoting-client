import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkingSpaces from "./WorkingSpaces";
import service from "../services/service";

const Add = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
      name: null,
      district: "Mitte",
      description: null,
      type: "Private",
      priceRange: "$",
      openingTimes: null,
      imageUrl: undefined,
      website: null,
      extras: null,
      petFriendly: "Yes",
    });

    const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log(response)
        setFormData({ ...formData, imageUrl: response.secure_url });
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    console.log(formData);     
              service
                  .createSpace(formData)
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
            Name:</label>
          <input type="text" name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <br />

          <label>Bezirk </label>
          <select id="district" name="district" value={formData.district} onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }>
          <option value="Mitte">Mitte</option>
          <option value="Neukölln">Neukölln </option>
          <option value="Friedrichshain">Friedrichshain </option>
          <option value="Prenzaluer Berg">Prenzlauer Berg</option>          
          <option value="Kreuzberg">Kreuzberg</option>
          <option value="Moabit">Moabit</option>
          <option value="Charlottenburg">Charlottenburg</option>
          <option value="Wilmersdorf">Wilmersdorf</option>
          <option value="Pankow">Pankow</option>
          <option value="Lichtenberg">Lichtenberg</option>
          <option value="Schöneberg">Schöneberg</option>
          <option value="Treptow">Treptow</option>
          <option value="Köpenick">Köpenick</option>
          <option value="Steglitz">Steglitz</option>
          <option value="Zehlendorf">Zehlendorf</option>
          <option value="Marzahn">Marzahn</option>
          <option value="Hellersdorf">Hellersdorf</option>
          <option value="Reinickendorf">Reinickendorf</option>
          <option value="Spandau">Spandau</option>  
          <option value="Wedding">Wedding</option>
          </select>         

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

        <label>Type of place: </label>           
         <select id="type" name="type" value={formData.type} onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }>
          <option value="Public">Public</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="Cowork">Coworking space</option>
          </select>
      
  <br />

            <label>Prince Range  </label>
          <select id="priceRange" name="priceRange" value={formData.priceRange} onChange={(e) =>
              setFormData({ ...formData, priceRange: e.target.value })
            }>
          <option value="$"> $</option>
          <option value="$$"> $$</option>
          <option value="$$$">$$$</option>
          </select>
        
          <br />

  {/* Opening Times */}      

  <label>Opening Times 🗓️ </label>
          <input
            type="text"
            name="openingTimes"
            onChange={(e) =>
              setFormData({ ...formData, openingTimes: e.target.value })
            }
            value={formData.openingTimes}
          />
<br />



{/* End Opening Times */}         

          <label>Maps link 🌍</label>
            <input 
            type="text"
            name="website"
            onChange={(e) => setFormData({...formData, website: e.target.value})}
          value={formData.website}
          />
          
<br />

          <label>Pet Friendly? 🐕 🐈 </label>           
          <select id="petFriendly" name="petFriendly" value={formData.petFriendly} onChange={(e) =>
              setFormData({ ...formData, petFriendly: e.target.value })
            }>
          <option value="Yes"> Yes</option>
          <option value="No"> No</option>
          <option value="I don't know">I don't know</option>
          </select>
          
          {/* FORM SELECT FUNCIONA SOLAMENTE CUANDO SELECCIONO NO. LOS DEMAS NO FUNCIONAN */}
        
        <br />

          <label>Extras:</label>
          <textarea
            placeholder="extra info like bad wifi, too loud to work, etc."
            type="text"
            name="extras"
            onChange={(e) =>
              setFormData({ ...formData, extras: e.target.value })
            }
            value={formData.extras}
          />
          

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
