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
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#282c34' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password Link positioned here */}
          <div className="flex justify-between items-center mb-4">
            <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          {/* ReCAPTCHA component */}
          <div className="mb-6">
            <ReCAPTCHA
              sitekey="6LfRDlEqAAAAAFd_gHjZ5zbOItnKWUaEnetEMi1X"
              onChange={onCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mb-4"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => console.log('GitHub Signup clicked')}
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.304.762-1.603-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.005.404 2.291-1.553 3.298-1.23 3.298-1.23.654 1.649.242 2.873.118 3.176.769.84 1.236 1.911 1.236 3.221 0 4.61-2.803 5.623-5.476 5.921.43.37.823 1.103.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                clipRule="evenodd"
              />
            </svg>
            Sign in with GitHub
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
