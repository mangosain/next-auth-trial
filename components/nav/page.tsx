"use client";

import "./nav.styles.css";

import { useAuth } from "@/contexts/authContext";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase.config";

const Nav = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="w-full p-5 flex items-center justify-between border rounded-xl">
      <h1 className="text-2xl font-bold">Create Next App</h1>
      <ul className="flex md:space-x-44">
        <li className="hover:underline active:underline">
          <a href="/">Home</a>
        </li>
        {currentUser ? (
          <li className="hover:underline active:underline">
            <a onClick={handleLogout}>Log out</a>
          </li>
        ) : (
          <li className="hover:underline active:underline">
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
