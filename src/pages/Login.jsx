import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="bg-red-300 mx-auto w-2/5 ">
      <div className="mt-20 mb-20">
        <h1 className="text-center py-4 text-xl">
          <strong>Login</strong>
        </h1>
        <form className="w-full max-w-sm" onSubmit={handleLoginSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Email:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                placeholder="*********"
              />
            </div>
          </div>
          {/* <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
          </div> */}
          <div className="md:flex lg:items-center">
            <div className="md:w-1/3"></div>
            <div className="items-center lg:w-1/2">
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Log In
              </button>
            </div>
          </div>
        </form>

        {/* <form onSubmit={handleLoginSubmit}>
      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={handleEmail} />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
      />

      <button type="submit">Login</button>
    </form>  */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="text-center py-2">
          <p>Don't have an account yet?</p>
          <Link to={"/signup"} className="font-extrabold"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
