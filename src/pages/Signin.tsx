import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { LayoutWrapper } from '../components/LayoutWrapper';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle } from '../lib/auth';
import { auth } from '../services/firebase'; 

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
      await signInWithEmailAndPassword(auth, email, password);
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

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle();
      console.log('User signed in with Google');
      navigate('/home'); // Redirect after Google signin
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google');
    }
  }

  return (
    <LayoutWrapper>
      <Card>
        <h1 className="text-2xl text-center font-bold mb-8">Log In</h1>

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

          <PrimaryButton label="Sign In" onClick={handleSignin} />
          <div className="relative my-2">
            <hr className="border-t" />
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 text-gray-500 text-sm">
              or
            </span>
          </div>
          <PrimaryButton
            label="Continue with Google"
            onClick={() => handleGoogleSignin()}
            icon={<FcGoogle className="text-xl" />}
          />
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
