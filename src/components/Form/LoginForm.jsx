import React from 'react';
import { Link, Form, useActionData } from "react-router-dom";
import { Loader2 } from "lucide-react";

function LoginForm({ loading }) {
  const actionData = useActionData();

  return (
    <Form
      className="flex flex-col max-w-[420px] mx-auto space-y-4"
      action="/login"
      method="post"
    >
      <h1 className="font-bold text-2xl text-neutral-900">
        Login to Your Account
      </h1>
      
      <div>
        <label
          className="text-sm text-neutral-600 font-semibold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          aria-describedby="email-error"
          placeholder="Enter your email"
          className="w-full mt-1 bg-neutral-50 border border-gray-200 rounded-lg p-3 placeholder:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/80"
        />
        {actionData?.errors?.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {actionData.errors.email}
          </p>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label
            className="text-sm text-neutral-600 font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <Link to="/forgot-password" className="text-xs text-orange-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          aria-describedby="password-error"
          placeholder="Enter your password"
          className="w-full mt-1 bg-neutral-50 border border-gray-200 rounded-lg p-3 placeholder:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/80"
        />
        {actionData?.errors?.password && (
          <p id="password-error" className="mt-1 text-xs text-red-500">
            {actionData.errors.password}
          </p>
        )}
      </div>

      <button
        disabled={loading}
        className={`flex items-center justify-center w-full rounded-full p-3 font-semibold text-lg transition ${
          loading
            ? "bg-orange-300 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
        type="submit"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </button>

      {actionData?.error && (
        <p className="text-sm text-red-500 text-center">{actionData.error}</p>
      )}

      <p className="text-gray-600 text-sm font-semibold text-center">
        Don't have an account?{" "}
        <Link className="text-orange-500 hover:underline" to="/register">
          Sign Up
        </Link>
      </p>
    </Form>
  );
}

export default LoginForm;
