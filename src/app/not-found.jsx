"use client";

import Animation from "../animation/error.json";
import Lottie from "lottie-react";
import { motion, useReducedMotion } from "framer-motion";

const NotFound = () => {
  const shouldReduceMotion = useReducedMotion();

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[] px-4" style={{ background: 'linear-gradient(180deg, #0f0c07 0%, #1a1508 60%, #0f0c07 100%)' }}>
      <div className="text-center">
        
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #e8d5a3 0%, transparent 70%)",
              }}
            />

            {/* Lottie Animation */}
            <motion.div
              variants={shouldReduceMotion ? {} : floatVariants}
              animate="animate"
            >
              <Lottie animationData={Animation} loop />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <h1 className="text-5xl font-bold mt-6">
          404
        </h1>

        <p className="text-lg text-gray-500 mt-4">
          Oops! Page not found.
        </p>
      </div>
    </div>
  );
};

export default NotFound;