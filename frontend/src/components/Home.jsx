import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
            <nav className="bg-blue-500 text-white py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">MERN App</a>
            <div>
              <a href="/register" className="mr-4 hover:text-gray-200">Register</a>
              <a href="/login" className="hover:text-gray-200">Login</a>
            </div>
          </div>
        </nav>
      <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the MERN App</h1>
        <p className="mb-8">Please login or register to continue.</p>
        <div className="flex justify-between">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
    </>


  );
}

export default Home;