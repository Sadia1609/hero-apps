import React from 'react';
import { useRouteError } from 'react-router';
import errorImg from '../assets/error-404.png'; 
import pageErrorImg from '../assets/App-Error.png';
const ErrorPage = () => {
    const error = useRouteError(); 
    console.error(error);

     const isPageNotFound = error?.status === 404;

    return (

        <div className="flex justify-center items-center min-h-screen flex-col">
            <h2 className="text-3xl text-center text-red-500">Oops! Something went wrong.</h2>

           
            <img 
                src={isPageNotFound ? errorImg :  pageErrorImg} 
                alt={isPageNotFound ? "Page Not Found" : "Error 404"} 
                className="mt-5 w-80 md:w-96" 
            />
        </div>
    );
};

export default ErrorPage;
