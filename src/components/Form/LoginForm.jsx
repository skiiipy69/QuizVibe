import React from 'react';
import { Link, Form } from "react-router-dom";
import { motion } from "framer-motion";

function LoginForm({ loading }) {
  return (
    <Form
      className="flex flex-col w-full space-y-6"
      action="/login"
      method="post"
    >
      <div>
        <label
          className="text-sm text-gray-600 font-medium block mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label
            className="text-sm text-gray-600 font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <Link 
            to="/forgot-password"
            className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all duration-200"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        disabled={loading}
        className={`relative w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
          loading
            ? "bg-orange-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </div>
        ) : (
          "Sign In"
        )}
      </motion.button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
        </div>
      </div>

      <Link
        to="/register"
        className="w-full py-3 px-4 rounded-lg font-semibold text-orange-500 border-2 border-orange-500 hover:bg-orange-50 transition-colors duration-200 text-center"
      >
        Create Account
      </Link>
    </Form>
  );
}

export default LoginForm;