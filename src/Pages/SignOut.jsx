import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Context/AuthContext"; // <-- IMPORT

const SignOut = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // <-- CONTEXT LOGOUT

  const handleSignOut = () => {
    logout(); // <-- USER KO SIGN OUT KAR RAHA HAI (context + localStorage)

    toast.success("You have successfully signed out!");

    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F8FA] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm text-center">

        <div className="mb-6 bg-gray-100 w-fit mx-auto p-3 rounded-full">
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

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile</h2>

        <p className="text-gray-600 mb-6">
          You are signed in. Click below to sign out.
        </p>

        <button
          onClick={handleSignOut}
          className="bg-[#0FB8A9] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0ca596] transition"
        >
          Sign Out
        </button>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default SignOut;
