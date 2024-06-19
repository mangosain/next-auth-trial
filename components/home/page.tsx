"use client";

import { useAuth } from "@/contexts/authContext";
import "./home.styles.css";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="home-container">
      <h1
        className="
        text-8xl
        font-bold
        text-center
        text-blue-600
        my-5
        hover:text-blue-800
      "
      >
        Home Page
      </h1>
      <p
        className="
        text-2xl
        text-center
        text-gray-500
        hover:text-gray-700
      "
      >
        Welcome to the home page! {currentUser ? currentUser.email : "Guest"}
      </p>

      {currentUser ? (
        <p className="text-center text-2xl text-green-500 mt-3">
          You are logged in!
        </p>
      ) : (
        <p className="text-center text-2xl text-red-500 mt-3">
          You are not logged in!
        </p>
      )}
    </div>
  );
};

export default Home;
