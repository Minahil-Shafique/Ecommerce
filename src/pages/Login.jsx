import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";

function Login() {
  let dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <form onSubmit={handleSubmit} className="container m-5 text-center">
      <h1 className="m-5">Login</h1>
      <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control w-75 h-auto"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control w-75 h-auto"
            id="inputPassword3"
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-secondary text-center pt-0 w-auto h-auto"
      >
        Sign in
      </button>
    </form>
  );
}

export default Login;
