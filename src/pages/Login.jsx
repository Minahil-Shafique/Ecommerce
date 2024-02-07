import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";

function Login() {
  const [password, setPassword] = useState(true);

  let handleClick = () => {
    setPassword(!password);
  };

  let dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="card p-5 bg-light">
        <h1 className="text-center mb-4">Login</h1>
        <div className="row mb-3">
          <div className="col-sm-10 mx-auto">
            <input
              placeholder="Email"
              type="email"
              className="form-control"
              id="inputEmail3"
              required={true}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 mx-auto">
              <input
                placeholder="Password"
                type={password ? "password" : "text"}
                className="form-control"
                id="inputPassword3"
                required={true}
              />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-secondary pb-4 pt-0 px-0">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
