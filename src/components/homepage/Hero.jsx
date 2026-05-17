'use client'
import Link from 'next/link';
import Animation from '../../animation/student.json';
import Lottie from 'lottie-react';
import { motion, useReducedMotion } from 'motion/react';

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
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className='container mx-auto mt-10 md:mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10 md:py-16'>

      {/* Left Side */}
      <motion.div
        className='left-side space-y-6 md:space-y-10 text-center md:text-left flex-1'
        initial='hidden'
        animate='visible'
      >
        {/* Badge */}
        <motion.div variants={fadeUp(0)}>
          <div className='inline-flex items-center gap-6 px-4 py-1 rounded-full bg-[#363635] border border-[#c5b48a] text-[#e8d5a3] text-sm'>
            ✦ Your Digital Library
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeUp(0.1)}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight'>
            Where Every Story <br className='hidden sm:block' />
            Finds Its Reader
          </h2>
          <p className='text-base md:text-lg text-gray-300'>
            Browse thousands of titles, borrow digitally, and carry your{' '}
            <br className='hidden md:block' />
            entire library in your pocket.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className='flex flex-wrap gap-3 justify-center md:justify-start'
          variants={fadeUp(0.2)}
        >
          <Link href='/login'>
            <motion.button
              className='btn bg-[#e8d5a3] text-[#0f0f10] font-semibold px-6 py-2 rounded-lg'
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.04, backgroundColor: '#cbb88b', color: '#ffffff' }
              }
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Browse Collection
            </motion.button>
          </Link>

          <Link href='/signup'>
            <motion.button
              className='btn border border-[#e8d5a3] text-[#e8d5a3] font-semibold px-6 py-2 rounded-lg'
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.04, backgroundColor: '#e8d5a3', color: '#0f0f10' }
              }
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Sign In
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side - Lottie with float */}
      <motion.div
        className='right-side flex-shrink-0 w-full max-w-[280px] sm:max-w-xs md:max-w-md mx-auto md:mx-0'
        initial={{ opacity: 0, scale: 0.88, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <motion.div
          variants={shouldReduceMotion ? {} : floatVariants}
          animate='animate'
        >
          <Lottie animationData={Animation} loop={true} />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Hero;