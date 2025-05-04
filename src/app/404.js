import React from 'react';

const page = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-300 text-2xl mb-8">
          Page not found. Let's get you back on track!
        </p>
        {/* You can add a back button or a link to the homepage here */}
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back Home
        </button> */}
      </div>
      {/* Add abstract shapes using SVG or other methods */}
      {/* Example: */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-500 rounded opacity-30"></div>
    </div>
  );
};

export default page;