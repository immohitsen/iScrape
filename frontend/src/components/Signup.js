import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = (props) => {
  const host = "https://iscrape.onrender.com";

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    try {
      const response = await axios.post(`${host}/api/auth/createuser`, {
        name,
        email,
        password,
      });
      const json = response.data;
      console.log(json);

      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Account Created Successfully", "success");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      props.showAlert("An error occurred. Please try again.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-dark">
            Create an account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                onChange={onChange}
                aria-describedby="nameHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
