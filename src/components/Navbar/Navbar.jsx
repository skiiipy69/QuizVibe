import React from 'react';
import { Link } from "react-router-dom";
import useQuestionStore from "../../store/zustand";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-gray-900 text-white px-5 md:px-10 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <span className="text-purple-500">Quiz</span>
          <span className="text-teal-400">Vibe</span>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/about"
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/faq"
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            FAQ
          </Link>
          {auth?.email && (
            <Link
              to="/suggest-quiz"
              className="text-white hover:text-teal-400 transition-colors duration-300"
            >
              Suggest Quiz
            </Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {!auth?.email && (
            <Link
              className="py-2 px-5 text-teal-400 font-semibold border-2 border-teal-400 rounded-full transition-all duration-300 hover:bg-teal-400 hover:text-gray-900"
              to="/login"
            >
              Login
            </Link>
          )}
          {auth?.email ? (
            <button
              className="py-2 px-5 text-white font-semibold rounded-full bg-purple-500 transition-all duration-300 hover:bg-teal-400 hover:shadow-md"
              onClick={logoutUser}
            >
              Logout
            </button>
          ) : (
            <Link
              className="py-2 px-5 text-gray-900 font-semibold rounded-full bg-purple-500 transition-all duration-300 hover:bg-purple-600 hover:shadow-md"
              to="/register"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;