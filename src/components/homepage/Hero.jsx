"use client";
import Link from "next/link";
import Animation from "../../animation/student.json";
import Lottie from "lottie-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f0c07 0%, #1a1508 60%, #0f0c07 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "#a07840" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "#e8d5a3" }}
      />

      <div className="container mx-auto mt-10 md:mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10 md:py-16 relative z-10">
        {/* ── Left Side ── */}
        <motion.div
          className="left-side space-y-6 md:space-y-10 text-center md:text-left flex-1"
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp(0)}>
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

          {/* Headline */}
          <motion.div variants={fadeUp(0.1)} className="space-y-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
            >
              Find Your{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #e8d5a3, #a07840)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Next Read
              </span>
            </h1>

            {/* Divider line */}
            <motion.div
              className="h-px w-16 md:mx-0 mx-auto"
              style={{
                background: "linear-gradient(90deg, #e8d5a3, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            />

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#9a8a6a", maxWidth: "420px" }}
            >
              Browse thousands of titles, borrow digitally, and carry your
              entire library in your pocket.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            variants={fadeUp(0.25)}
          >
            <Link href="/books">
              <motion.button
                className="px-7 py-3 rounded-xl font-semibold text-sm tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                  color: "#0f0c07",
                  fontFamily: "Georgia, serif",
                  boxShadow: "0 4px 20px rgba(232,213,163,0.25)",
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        boxShadow: "0 6px 28px rgba(232,213,163,0.4)",
                      }
                }
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Browse Now
              </motion.button>
            </Link>

            <Link href="/login">
              <motion.button
                className="px-7 py-3 rounded-xl font-semibold text-sm tracking-wide"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(232,213,163,0.4)",
                  color: "#e8d5a3",
                  fontFamily: "Georgia, serif",
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        background: "rgba(232,213,163,0.08)",
                        borderColor: "#e8d5a3",
                      }
                }
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Sign In
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Right Side — Lottie with float ── */}
        <motion.div
          className="right-side flex-shrink-0 w-full max-w-[280px] sm:max-w-xs md:max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.88, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* Glow ring behind Lottie */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #e8d5a3 0%, transparent 70%)",
              }}
            />
            <motion.div
              variants={shouldReduceMotion ? {} : floatVariants}
              animate="animate"
            >
              <Lottie animationData={Animation} loop={true} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0f0c07)",
        }}
      />
    </div>
  );
};

export default Hero;
