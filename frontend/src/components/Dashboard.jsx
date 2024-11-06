// Dashboard.js
import React from 'react';
// import Navbar from '../components/Navbar';
// import CompanyProfile from '../components/CompanyProfile';
// import JobOpenings from '../components/JobOpenings';
// import Tweets from '../components/Tweets';

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Navbar /> */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Company Dashboard</h1>
        {/* <CompanyProfile />
        <JobOpenings /> */}
        <Tweets />
      </div>
    </div>
  );
};

export default Dashboard;
