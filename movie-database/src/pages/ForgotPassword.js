import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email.');
      return;
    }

    // Simulate sending reset request
    setMessage(`If ${email} is registered, you'll receive a password reset link.`);

    // Clear the form
    setEmail('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter your email to reset your password.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {message && (
        <div className="mt-4 text-center text-sm text-green-500">{message}</div>
      )}
    </div>
  );
};

export default ForgotPassword;
