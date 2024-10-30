import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

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
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border rounded-lg px-3 py-2 w-full"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border rounded-lg px-3 py-2 w-full"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="border rounded-lg px-3 py-2 w-full"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                  type="submit"
                >
                  Register
                </button>
                <div className="mt-4 text-center">
                  <Link to="/login" className="text-blue-500 hover:text-blue-600">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
    </>

  );
}

export default Register;