import React, { useEffect } from 'react';
import { useNavigate, useActionData, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
import { handleLogin } from "../../api/firebase";
import useQuestionStore from "../../store/zustand";
import LoginForm from "../../components/Form/LoginForm";

function LoginPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { authUser } = useQuestionStore();

  useEffect(() => {
    if (data?.type === "SUCCESS") {
      authUser({ email: data.email, id: data.id });
      navigate("/", { replace: true });
    }
  }, [data, authUser, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] h-[600px] flex rounded-3xl shadow-2xl bg-white overflow-hidden">
        {/* Left Side - Decorative */}
        <div className="hidden lg:flex lg:w-1/2 bg-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-400/90 z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white p-12"
          >
            <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-lg text-center mb-8 text-orange-100">
              Start your journey with us and explore amazing quizzes
            </p>
            {/* Decorative Elements */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-xl mb-1">1000+</h3>
                <p className="text-sm text-orange-100">Active Users</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-xl mb-1">500+</h3>
                <p className="text-sm text-orange-100">Daily Quizzes</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-xl mb-1">24/7</h3>
                <p className="text-sm text-orange-100">Support</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-xl mb-1">98%</h3>
                <p className="text-sm text-orange-100">Satisfaction</p>
              </div>
            </div>
          </motion.div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12"
        >
          <div className="w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {data?.type === "ERROR" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6"
                >
                  {data.message.split("(")[1].replace(")", "")}
                </motion.div>
              )}
              
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
                <p className="text-gray-600">Access your account and start learning</p>
              </div>

              <LoginForm loading={navigation.state === "submitting"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
