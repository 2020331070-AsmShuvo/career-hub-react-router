import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import AppliedJobs from "./components/AppliedJobs.jsx";
import CategoryList from "./components/CategoryList.jsx";
import JobDetails from "./components/JobDetails.jsx";
import FeaturedJobs from "./components/FeaturedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/featured",
            element: <FeaturedJobs/>
        },
        {
            path: "/categories",
            element: <CategoryList/>
        },
        {
            path: "/job/:id",
            element: <JobDetails/>,
            loader : ()=> fetch('../jobs.json')
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
