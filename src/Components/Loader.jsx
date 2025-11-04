import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-20 h-20 border-4 border-t-transparent rounded-full" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;