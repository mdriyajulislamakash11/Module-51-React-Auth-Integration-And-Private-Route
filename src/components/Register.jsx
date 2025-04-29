import React from 'react';

const Register = () => {

    
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

    }



    return (
        <div className="flex justify-center items-center my-32">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-center text-4xl font-bold text-accent'>Regicter</h2>
          <form onSubmit={handleRegisterSubmit} className="card-body">
            <div className="form-control">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;