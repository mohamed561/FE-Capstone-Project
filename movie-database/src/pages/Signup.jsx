import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#282c34' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Create an Account</h2>
        <SignUp />
      </div>
    </div>
  );
}

export default Signup;