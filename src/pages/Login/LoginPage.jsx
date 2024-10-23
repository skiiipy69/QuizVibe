import React, { useEffect } from 'react';
import { useNavigate, useActionData, useNavigation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      style={{
        background: 'linear-gradient(-45deg, #ff9a9e, #fad0c4, #ffecd2, #fcb69f)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1200px] h-[650px] flex rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md overflow-hidden relative z-10"
      >
        {/* Left Side - Interactive Decorative */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-500 to-rose-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-rose-500/90 z-10" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%'
                }}
                animate={{
                  y: ['-20%', '120%'],
                  x: `${Math.sin(i) * 20 + parseFloat(Math.random() * 100)}%`
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white p-12"
          >
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome Back!
            </motion.h2>
            <motion.p 
              className="text-lg text-center mb-12 text-orange-50"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Embark on a journey of knowledge and discovery
            </motion.p>

            {/* Stats Grid with Hover Effects */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {[
                { title: "1000+", subtitle: "Active Users", delay: 0.4 },
                { title: "500+", subtitle: "Daily Quizzes", delay: 0.5 },
                { title: "24/7", subtitle: "Support", delay: 0.6 },
                { title: "98%", subtitle: "Satisfaction", delay: 0.7 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white/20 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 cursor-pointer group"
                >
                  <motion.h3 
                    className="font-bold text-2xl mb-1 group-hover:text-orange-200 transition-colors"
                  >
                    {stat.title}
                  </motion.h3>
                  <p className="text-sm text-orange-100">{stat.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 relative"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, black 2%, transparent 0%)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="w-full max-w-md mx-auto relative z-10">
            <AnimatePresence mode="wait">
              {data?.type === "ERROR" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-red-50 text-red-600 px-6 py-4 rounded-xl mb-6 shadow-lg"
                >
                  {data.message.split("(")[1].replace(")", "")}
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500 mb-3">
                Login
              </h1>
              <p className="text-gray-600">Access your personalized learning journey</p>
            </motion.div>

            <LoginForm loading={navigation.state === "submitting"} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LoginPage;