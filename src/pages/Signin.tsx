import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { LayoutWrapper } from '../components/LayoutWrapper';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../services/firebase'; // Uncomment after Firebase setup

export const Signin: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Firebase signin logic
      // await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', { email });
      navigate('/home'); // Redirect after signin
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to create account');
      }
    }
  };

  return (
    <LayoutWrapper>
      <Card>
        <h1 className="text-2xl font-bold mb-4">Create an Account</h1>

        <div className="flex flex-col gap-4">
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <PrimaryButton label="Sign Up" onClick={handleSignin} />
          <p className="text-sm text-center text-gray-600 mt-2">
            Do not have an account?{' '}
            <span
              className="text-[#00df9a] cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </span>
          </p>
        </div>
      </Card>
    </LayoutWrapper>
  );
};
