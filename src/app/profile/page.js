"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  const getUserInfo = async () => {
    try {
      const res = await axios.get("/api/users/me");

      const { username, _id, email } = res.data.data;
      console.log(username)

      router.push(`/profile/${username}`);
    } catch (error) {
      toast.error(error.message);

      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");

      toast.success("Logout successful");

      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");

      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Profile Page</h1>

        <p className="text-gray-400 mb-8">You are successfully logged in.</p>

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg mb-4"
        >
          Logout
        </button>

        <button
          onClick={getUserInfo}
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg"
        >
          Get Info
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
