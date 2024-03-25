import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661266819853-ac00dcaf21d2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 w-1/2 text-5xl mx-auto text-gray-300 bg-[#cdb5b550] rounded-2xl py-4 font-bold">One Step Closer To Your Dream Job</h1>
            <p className="mb-5 w-2/3 mx-auto text-gray-300 bg-[#cdb5b551] rounded-2xl px-2 py-4 text-lg">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-success ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
