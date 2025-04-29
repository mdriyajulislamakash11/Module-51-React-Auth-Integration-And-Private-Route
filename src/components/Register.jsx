import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);


    // Create User
    createUser(email, password)
    .then((result) => {
      console.log(result.user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  };

  return (
    <div className="flex justify-center items-center my-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-4xl font-bold text-accent">Regicter</h2>
        <form onSubmit={handleRegisterSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Register</button>
          </div>
        </form>

        <p>
          please login now{" "}
          <Link to="/login" className="text-blue-600">
            login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
