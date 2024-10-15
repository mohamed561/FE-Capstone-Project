import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#282c34' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Login to Your Account</h2>
        <SignIn />
      </div>
    </div>
  );
}

export default Login;