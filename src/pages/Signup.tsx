import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { PrimaryButton } from "../components/PrimaryButton";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Card } from "../components/Card";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../lib/auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Firebase signup logic
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", { fullName, email });
      navigate("/dashboard"); // Redirect after signup
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to create account");
      }
    }
  };

  const handleGoogleSignin = async () => {
      try {
        await signInWithGoogle();
        console.log('User signed in with Google');
        navigate('/dashboard'); // Redirect after Google signin
      } catch (error) {
        console.error('Error signing in with Google:', error);
        setError('Failed to sign in with Google');
      }
    }

  return (
    <LayoutWrapper>
      <Card>
        <h1 className="text-2xl text-center font-bold mb-8">
          Create an Account
        </h1>

        <div className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
          />
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

          <PrimaryButton label="Sign Up" onClick={handleSignup} />
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
            Already have an account?{" "}
            <span
              className="text-[#00df9a] cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Log in
            </span>
          </p>
        </div>
      </Card>
    </LayoutWrapper>
  );
};
