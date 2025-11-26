import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, setLogin } = useAuth(); // context login function
  console.log("user->>>>>>>", user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = () => {
    // Verify email & password inside component
    if (!user) {
      toast.error("No account found. Please register.");
      return;
    }
    if (user.email === email && user.password === password) {
      setLogin(); // update global isAuthenticated state
      toast.success("Login successful!", {
        onClose: () => {
          navigate("/");
        },
      });
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F8FA] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-10">
        <Link to="/">
          <div className="flex items-center gap-2 text-gray-600 cursor-pointer mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right rotate-180 mr-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span>Back to home</span>
          </div>
        </Link>

        <div className="w-14 h-14 rounded-full mx-auto bg-[#E8FFFB] flex items-center justify-center text-[#0FB8A9] text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock h-6 w-6 text-[#43C6AC]"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h2 className="text-center text-2xl font-bold mt-4 text-gray-800">
          Sign In
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Access your BookShell account
        </p>

        <label className="block text-gray-700 mb-1">Email</label>
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-3 mb-5 focus-within:border-[#0FB8A9]">
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full outline-none"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <label className="block text-gray-700 mb-1">Password</label>
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-3 focus-within:border-[#0FB8A9]">
          <input
            type="password"
            placeholder="••••••"
            className="w-full outline-none"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          onClick={handleSignIn}
          className="w-full mt-6 py-3 rounded-lg bg-[#0FB8A9] text-white font-semibold hover:bg-[#0ca596] transition"
        >
          Sign In
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/create-account" className="text-[#0FB8A9] cursor-pointer">
            Create account
          </Link>
        </p>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default SignIn;
