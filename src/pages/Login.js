import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();  // Initialize the navigate hook

  // Test credentials for quick login
  const testCredentials = {
    email: 'test@example.com',
    password: 'password123',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // For testing purposes, if the entered email and password match the test credentials
    if (email === testCredentials.email && password === testCredentials.password) {
      const response = { ok: true, token: 'dummy-jwt-token' }; // Simulate a successful login
      if (response.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', response.token); // Store JWT token for further requests

        // Redirect the user to the Home page after successful login
        navigate('/'); // This will navigate to the Home page
      }
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {message && <p className="text-center text-red-500">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-3 mb-4 border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Display test credentials */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Use the following credentials to test login:</p>
          <div className="mt-2">
            <p className="font-semibold">Email: <span className="text-blue-500">test@example.com</span></p>
            <p className="font-semibold">Password: <span className="text-blue-500">password123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
