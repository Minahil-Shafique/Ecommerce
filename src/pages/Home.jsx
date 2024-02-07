import React from "react";
import { Link } from "react-router-dom"; 
import Product from "../components/Product";
import Header from "../components/Header";
import { chair } from "../images/images";
import "../styles/home.css";

function Home(props) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className="sage text-center mb-5">ECOMMERCE STORE</h1>
              <Link to="/shop" className="btn btn-secondary -flex flex-column justify-content-center align-items-center">Shop here</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="bg-light rounded-circle p-4 circleImage mt-5">
                <img
                  src={chair}
                  alt="Chair"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    background: "transparent",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
