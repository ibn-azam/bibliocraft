'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { motion, useReducedMotion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const shouldReduceMotion = useReducedMotion();

  const handleLoginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) toast.error(error.message);
    if (res) toast.success("Signed in successfully!");
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(180deg, #0f0c07 0%, #1a1508 60%, #0f0c07 100%)" }}
    >
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        toastStyle={{
          background: "#1a1508",
          border: "1px solid rgba(232,213,163,0.2)",
          color: "#e8d5a3",
          fontFamily: "Georgia, serif",
          fontSize: "13px",
        }}
        progressStyle={{
          background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "#a07840" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "#e8d5a3" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0f0c07)" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp(0)} className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
            style={{
              background: "rgba(160,120,64,0.15)",
              border: "1px solid rgba(232,213,163,0.3)",
              color: "#e8d5a3",
              fontFamily: "Georgia, serif",
            }}
          >
            <span style={{ color: "#a07840" }}>✦</span> Your Digital Library
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeUp(0.1)} className="text-center mb-8 space-y-3">
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
          >
            Welcome{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e8d5a3, #a07840)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Back
            </span>
          </h1>

          {/* Animated divider */}
          <motion.div
            className="h-px w-16 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, #e8d5a3, transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          />

          <p className="text-sm leading-relaxed" style={{ color: "#9a8a6a" }}>
            Sign in to access your library and continue reading.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={fadeUp(0.2)}
          className="rounded-2xl p-8 space-y-5"
          style={{
            background: "rgba(232,213,163,0.04)",
            border: "1px solid rgba(232,213,163,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Google Button */}
          <motion.button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide"
            style={{
              background: "rgba(232,213,163,0.06)",
              border: "1px solid rgba(232,213,163,0.2)",
              color: "#e8d5a3",
              fontFamily: "Georgia, serif",
            }}
            whileHover={shouldReduceMotion ? {} : {
              background: "rgba(232,213,163,0.12)",
              borderColor: "rgba(232,213,163,0.4)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "rgba(232,213,163,0.12)" }} />
            <span className="text-xs font-medium" style={{ color: "#6b5e45" }}>or sign in with email</span>
            <div className="flex-1 h-px" style={{ background: "rgba(232,213,163,0.12)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold mb-1.5 tracking-wide"
                style={{ color: "#9a8a6a", fontFamily: "Georgia, serif" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(232,213,163,0.06)",
                  border: errors.email
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(232,213,163,0.15)",
                  color: "#e8d5a3",
                  fontFamily: "Georgia, serif",
                }}
                onFocus={(e) => {
                  e.target.style.border = errors.email
                    ? "1px solid rgba(239,68,68,0.8)"
                    : "1px solid rgba(232,213,163,0.4)";
                  e.target.style.boxShadow = errors.email
                    ? "0 0 0 3px rgba(239,68,68,0.1)"
                    : "0 0 0 3px rgba(232,213,163,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.border = errors.email
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(232,213,163,0.15)";
                  e.target.style.boxShadow = "none";
                }}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                })}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#f87171" }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold tracking-wide"
                  style={{ color: "#9a8a6a", fontFamily: "Georgia, serif" }}
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs transition-colors"
                  style={{ color: "#a07840" }}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(232,213,163,0.06)",
                  border: errors.password
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(232,213,163,0.15)",
                  color: "#e8d5a3",
                  fontFamily: "Georgia, serif",
                }}
                onFocus={(e) => {
                  e.target.style.border = errors.password
                    ? "1px solid rgba(239,68,68,0.8)"
                    : "1px solid rgba(232,213,163,0.4)";
                  e.target.style.boxShadow = errors.password
                    ? "0 0 0 3px rgba(239,68,68,0.1)"
                    : "0 0 0 3px rgba(232,213,163,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.border = errors.password
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(232,213,163,0.15)";
                  e.target.style.boxShadow = "none";
                }}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#f87171" }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm tracking-wide mt-1"
              style={{
                background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                color: "#0f0c07",
                fontFamily: "Georgia, serif",
                boxShadow: "0 4px 20px rgba(232,213,163,0.25)",
              }}
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.03,
                boxShadow: "0 6px 28px rgba(232,213,163,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Sign In
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp(0.35)}
          className="text-center text-sm mt-6"
          style={{ color: "#6b5e45" }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold"
            style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
          >
            Register
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LogInPage;