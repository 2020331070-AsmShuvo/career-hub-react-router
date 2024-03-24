import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" etxt-center ">
      <div className="indicator">
        <Link to="/"><button className="btn btn-warning absolute">Go to Home</button></Link>
        <img
        className=""
          alt="Tailwind CSS examples"
          src="https://images.unsplash.com/photo-1623018035782-b269248df916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
