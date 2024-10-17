import React from 'react';
import { Link } from "react-router-dom";
import useQuestionStore from "../../store/zustand";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-gray-900 text-white px-5 md:px-10 flex items-center justify-between py-4 shadow-lg">
      <Link to="/" className="text-3xl font-extrabold tracking-tight flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <span className="text-purple-500">Quiz</span>
        <span className="text-teal-400">Vibe</span>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      </Link>
      <div className="space-x-4">
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
            className="py-2 px-5 text-white font-semibold rounded-full bg-red-600 transition-all duration-300 hover:bg-red-700 hover:shadow-md"
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
    </nav>
  );
}

export default Navbar;
