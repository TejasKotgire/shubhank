// Dashboard.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Search Section */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search for a company..."
            className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-md">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Company Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Company Details</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://logo.clearbit.com/google.com"
              alt="Google Logo"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Google LLC is an American multinational technology company specializing in
                Internet-related services and products.
              </p>
            </div>
          </div>
          <p><strong>Employees:</strong> 150,000+</p>
          <p><strong>Rating:</strong> 4.5 / 5</p>
        </div>

        {/* Predicted Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Predicted Jobs</h2>
          <div className="space-y-3">
            <div className="p-3 border-b">
              <h3 className="font-semibold">Software Engineer</h3>
              <p className="text-sm text-gray-500">Location: Mountain View, CA</p>
              <p className="text-sm text-gray-500">Type: Full-Time</p>
              <a href="https://careers.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Details
              </a>
            </div>
            <div className="p-3 border-b">
              <h3 className="font-semibold">Data Scientist</h3>
              <p className="text-sm text-gray-500">Location: New York, NY</p>
              <p className="text-sm text-gray-500">Type: Full-Time</p>
              <a href="https://careers.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Details
              </a>
            </div>
            <div className="p-3 border-b">
              <h3 className="font-semibold">Product Manager</h3>
              <p className="text-sm text-gray-500">Location: San Francisco, CA</p>
              <p className="text-sm text-gray-500">Type: Full-Time</p>
              <a href="https://careers.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* Company Tweets */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Company Tweets</h2>
          <div className="space-y-3">
            <div className="p-3 border-b">
              <p className="text-gray-700">"We’re excited to announce our latest advancements in AI-powered search capabilities. #GoogleAI #Innovation"</p>
              <p className="text-sm text-gray-500">Posted on: 2024-11-05</p>
            </div>
            <div className="p-3 border-b">
              <p className="text-gray-700">"Google Cloud is here to support businesses with robust, scalable solutions. Learn more about our new products. #GoogleCloud #Tech"</p>
              <p className="text-sm text-gray-500">Posted on: 2024-10-31</p>
            </div>
            <div className="p-3 border-b">
              <p className="text-gray-700">"Our commitment to sustainability is stronger than ever. Discover how we’re making a difference. #Sustainability #GoogleGreen"</p>
              <p className="text-sm text-gray-500">Posted on: 2024-10-25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Dashboard;
