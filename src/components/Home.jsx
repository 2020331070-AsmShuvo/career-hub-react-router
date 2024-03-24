import React from "react";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import useTitle from "./CustomHook/useTitle";

const Home = () => {
  const heading1 = useTitle(
    "Job Category List",
    "Explore thousands of job opportunities with all the information you need. Its your future"
  );
  const heading2 = useTitle(
    "Featured Jobs",
    "Explore thousands of job opportunities with all the information you need. Its your future"
  );
  return (
    <div>
      <Banner />
      <div className="text-center my-10">
        <h2 className="text-3xl font-semibold">{heading1.title}</h2>
            <p className="text-lg">{heading1.disc}</p>
      </div>
      <CategoryList className/> <hr/>
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-semibold">{heading2.title}</h2>
        <p className="text-lg">{heading2.disc}
        </p>
      </div>
    </div>
  );
};

export default Home;
