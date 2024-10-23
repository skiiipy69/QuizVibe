import React from 'react';
import { Link, Form } from "react-router-dom";
import { motion } from "framer-motion";

function LoginForm({ loading }) {
  const inputVariants = {
    focus: { scale: 1.02 },
    blur: { scale: 1 }
  };

  return (
    <Form
      className="flex flex-col w-full space-y-6"
      action="/login"
      method="post"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          className="text-sm text-gray-600 font-medium block mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <motion.input
          variants={inputVariants}
          whileFocus="focus"
          animate="blur"
          transition={{ duration: 0.2 }}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all duration-200"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-between items-center mb-2">
          <label
            className="text-sm text-gray-600 font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <Link 
            to="/forgot-password"
            className="text-sm text-orange-500 hover:text-rose-500 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
        <motion.input
          variants={inputVariants}
          whileFocus="focus"
          animate="blur"
          transition={{ duration: 0.2 }}
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all duration-200"
        />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className={`relative w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 ${
          loading
            ? "bg-gradient-to-r from-orange-400 to-orange-500 cursor-not-allowed"
            : "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600"
        }`}
        type="submit"
      >
        <motion.div
          initial={false}
          animate={loading ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 bg-white/10 rounded-xl"
        />
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

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white/90 text-gray-500">New to our platform?</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/register"
          className="block w-full py-4 px-6 rounded-xl font-semibold text-orange-500 border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white transition-all duration-300 text-center"
        >
          Create Account
        </Link>
      </motion.div>
    </Form>
  );
}

export default LoginForm;