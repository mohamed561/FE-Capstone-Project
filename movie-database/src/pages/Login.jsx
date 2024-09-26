import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please complete the CAPTCHA verification');
      return;
    }
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  const onCaptchaChange = (value) => {
    setCaptchaVerified(true);  // When captcha is solved
    console.log('CAPTCHA value:', value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <ReCAPTCHA
              sitekey="6LfVAlAqAAAAANxbvB8W8ZVrnzxms1AZQXSbkRo_"
              onChange={onCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
