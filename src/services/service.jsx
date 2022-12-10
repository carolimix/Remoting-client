import axios from "axios";
 
const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005"
  // withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = (err) => {
  throw err;
};
  
const getSpaces = () => {
  return service.get("/spaces")
  .then((res) => res.data)
  .catch(errorHandler)
};

const uploadImage = (file) => {
  return service
    .post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};
  
const createSpace = (newSpace) => {
  return service
  .post("/spaces", newSpace)
  .then(res => res.data)
  .catch(errorHandler)
};

export default {
  service,
  getSpaces,
  uploadImage,
  createSpace,
};