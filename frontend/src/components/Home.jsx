// Introduction.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaBriefcase, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-blue-600 text-white p-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Predict Job Opportunities Through Twitter Data
          </h1>
          <p className="text-lg mb-8">
            Discover real-time job insights and analyze your resume to increase your chances of landing the perfect job.
          </p>
          <div className="space-x-4">
            <Link to="/login" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100">
              Log In
            </Link>
            <Link to="/register" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
              Try for Free
            </Link>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">About the Project</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This application leverages Twitter data and NLP to give you insights into job opportunities at various companies.
          Analyze your resume against specific job descriptions to get keyword suggestions, job title matches, and resume summaries.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaBriefcase className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Company Profile Display</h3>
            <p className="text-gray-600">
              View detailed information about companies, including employee count, ratings, and current job openings.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaTwitter className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Latest Company Tweets</h3>
            <p className="text-gray-600">
              See recent tweets about companies to gain insights into their culture and current activities.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaFileAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Resume Analyzer</h3>
            <p className="text-gray-600">
              Upload your resume and analyze it against job descriptions to find missing keywords and get tailored job title suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Step 1: Search for a Company</h3>
            <p className="text-gray-600">
              Enter a company name to view job opportunities, employee statistics, and recent Twitter activity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 2: Upload Your Resume</h3>
            <p className="text-gray-600">
              Upload your resume and a job description for detailed analysis of your qualifications and missing keywords.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 3: Get Analysis</h3>
            <p className="text-gray-600">
              View insights including keyword recommendations, suggested job titles, and a concise resume summary.
            </p>
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">Why Use This Tool?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
          Gain a competitive edge in the job market with our unique combination of Twitter insights and resume analysis.
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Real-Time Job Insights</h3>
            <p className="text-gray-600">
              Access current job openings and relevant company information with data-driven insights from Twitter.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Customized Resume Analysis</h3>
            <p className="text-gray-600">
              Receive personalized feedback on your resume to align it with specific job descriptions and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Login Prompt */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-8">Sign up now to unlock the full potential of this tool and increase your job search success.</p>
        <div className="space-x-4">
          <Link to="/login" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Log In
          </Link>
          <Link to="/register" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
            Try for Free
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">How does the resume analysis work?</h3>
            <p className="text-gray-600">
              The resume analyzer uses NLP to compare your resume with the job description, providing keyword recommendations and job suggestions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I try the tool for free?</h3>
            <p className="text-gray-600">
              Yes, a limited version of the tool is available for free so you can explore its features before signing up.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
