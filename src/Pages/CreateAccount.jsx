import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Context/AuthContext";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { createAccount } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleCreateAccount = () => {
    if (!username) return toast.error("Please enter your username!");
    if (!email) return toast.error("Please enter your email!");
    if (!password) return toast.error("Please enter your password!");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email))
      return toast.error("Please enter a valid email!");
    createAccount({ username, email, password });
    toast.success("Account created successfully!", {
      onClose: () => {
        navigate("/signin");
      },
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F8FA] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-10">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="flex items-center gap-2 text-gray-600 cursor-pointer mb-8">
          <Link to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>

        <h2 className="text-center text-2xl font-bold mt-4 text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join our community of book lovers
        </p>

        <label className="block text-gray-700 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-5 outline-none focus:border-[#0FB8A9]"
          value={username}
          onChange={handleUsernameChange}
        />

        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="email@example.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-5 outline-none focus:border-[#0FB8A9]"
          value={email}
          onChange={handleEmailChange}
        />

        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-5 outline-none focus:border-[#0FB8A9]"
          value={password}
          onChange={handlePasswordChange}
        />

        <button
          type="button"
          onClick={handleCreateAccount}
          className="w-full mt-6 py-3 rounded-lg bg-[#0FB8A9] text-white font-semibold hover:bg-[#0ca596] transition"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#0FB8A9] cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
