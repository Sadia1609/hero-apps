import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import React, { Suspense } from "react";
import Loader from "../Components/Loader";


const router = createBrowserRouter([

    {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
   
    children: [
         {
    
    index: true,
    element: (
      <Suspense fallback={<Loader />}>
           <Home />
          </Suspense>
    ),
  
  },
   {
    path: "/apps",
    element: (
          <Suspense fallback={<Loader />}>
           <Apps />
          </Suspense>
        ),
  },
   {
    path: "/installation",
    element: (
          <Suspense fallback={<Loader />}>
            <Installation />
          </Suspense>
        ),
  },
  {
    path: "/app/:id",
    element:  (
          <Suspense fallback={<Loader />}>
            <AppDetails />
          </Suspense>
        ),
  },
  ],
  },

  
])

export default router


