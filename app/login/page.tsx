"use client";

import { useState } from "react";
import { auth, googleProvider } from "@/firebase.config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

import "./login.styles.css";

const initialLoginState = {
  loginEmail: "",
  loginPassword: "",
};

const initialSignUpState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const LogIn = () => {
  const [loginState, setLoginState] = useState(initialLoginState);
  const { loginEmail, loginPassword } = loginState;

  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setCurrentUser(userCredential.user);
      alert("User logged in successfully!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
    setLoginState(initialLoginState);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const [signUpState, setSignUpState] = useState(initialSignUpState);
  const { email, password, confirmPassword } = signUpState;

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(userCredential.user);
      alert("User created successfully!");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
    setSignUpState(initialSignUpState);
  };

  const handleSignupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="auth-container">
      <div className="login p-10 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-center my-5">Log In!</h1>
        <form
          className="w-96 flex flex-col mx-auto gap-2 text-black"
          onSubmit={handleLogIn}
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded p-1"
            name="loginEmail"
            value={loginEmail}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded p-1"
            name="loginPassword"
            value={loginPassword}
            onChange={handleLoginChange}
          />
          <button type="submit" className="border p-1 rounded dark:text-white">
            Log In
          </button>
          <button className="border p-1 rounded dark:text-white">
            Log In with Google
          </button>
        </form>
      </div>
      <div className="h-96 w-0.5 bg-black dark:bg-white"></div>
      <div className="signup p-10 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-center my-5">Sign Up!</h1>
        <form
          className="w-96 flex flex-col mx-auto gap-2 text-black"
          onSubmit={handleSignUp}
        >
          <input
            type="email"
            placeholder="Email"
            className="rounded p-1"
            name="email"
            value={email}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded p-1"
            name="password"
            value={password}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded p-1"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleSignupChange}
          />
          <button type="submit" className="border p-1 rounded dark:text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
