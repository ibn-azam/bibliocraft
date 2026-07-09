'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const Navbar = () => {

    const { data: session , isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user,"user")
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Add backdrop blur + border on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/books', label: 'All Books' },
        { href: '/profile', label: 'My Profile' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -12, scale: 0.97 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
            opacity: 0, y: -8, scale: 0.97,
            transition: { duration: 0.18, ease: 'easeIn' },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1, x: 0,
            transition: { delay: i * 0.07, duration: 0.3 },
        }),
    };

    return (
        <>
            <motion.nav
                className="sticky top-0 z-50 px-6 md:px-16"
                style={{
                    background: isScrolled
                        ? 'rgba(15,12,7,0.92)'
                        : 'rgba(26,21,8,0.85)',
                    backdropFilter: 'blur(14px)',
                    borderBottom: isScrolled
                        ? '1px solid rgba(232,213,163,0.15)'
                        : '1px solid transparent',
                    transition: 'background 0.4s ease, border-color 0.4s ease',
                }}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

                    {/* ── Logo ── */}
                    <Link href="/">
                        <motion.span
                            className="text-2xl font-bold cursor-pointer select-none"
                            style={{
                                fontFamily: 'Georgia, serif',
                                background: 'linear-gradient(135deg, #e8d5a3, #a07840)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                            Bibliocraft
                        </motion.span>
                    </Link>

                    {/* ── Desktop Links ── */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>
                                    <motion.span
                                        className="relative text-sm tracking-wide cursor-pointer pb-0.5"
                                        style={{
                                            color: '#c4aa78',
                                            fontFamily: 'Georgia, serif',
                                        }}
                                        whileHover={{ color: '#e8d5a3' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {label}
                                        {/* Underline on hover */}
                                        <motion.span
                                            className="absolute bottom-0 left-0 h-px w-0 bg-[#e8d5a3]"
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                            style={{ display: 'block' }}
                                        />
                                    </motion.span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ── Desktop CTA Buttons ── */}
                   {isPending ? (<span className="loading loading-spinner text-warning"></span>) : user ? ( <div className="hidden md:flex items-center gap-3">
                    <h2 className='text-[#e8d5a3] font-semibold'>Hello,{user.name}</h2>
                        <Link href="/login">
                            <motion.button
                                className="px-5 py-2 rounded-lg text-sm font-semibold"
                                onClick={async()=> await authClient.signOut()}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(232,213,163,0.4)',
                                    color: '#e8d5a3',
                                    fontFamily: 'Georgia, serif',
                                }}
                                whileHover={{
                                    background: 'rgba(232,213,163,0.08)',
                                    borderColor: '#e8d5a3',
                                    scale: 1.03,
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                Logout
                            </motion.button>
                        </Link>
                        
                    </div>) :  (<div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <motion.button
                                className="px-5 py-2 rounded-lg text-sm font-semibold"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(232,213,163,0.4)',
                                    color: '#e8d5a3',
                                    fontFamily: 'Georgia, serif',
                                }}
                                whileHover={{
                                    background: 'rgba(232,213,163,0.08)',
                                    borderColor: '#e8d5a3',
                                    scale: 1.03,
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                Log In
                            </motion.button>
                        </Link>
                        <Link href="/signup">
                            <motion.button
                                className="px-5 py-2 rounded-lg text-sm font-semibold"
                                style={{
                                    background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                                    color: '#0f0c07',
                                    fontFamily: 'Georgia, serif',
                                    boxShadow: '0 2px 12px rgba(232,213,163,0.2)',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 4px 20px rgba(232,213,163,0.35)',
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                Sign Up
                            </motion.button>
                        </Link>
                    </div>)}

                    {/* ── Mobile Hamburger ── */}
                    <motion.button
                        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            className="block h-px w-6 rounded"
                            style={{ background: '#e8d5a3' }}
                            animate={menuOpen
                                ? { rotate: 45, y: 6 }
                                : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.25 }}
                        />
                        <motion.span
                            className="block h-px w-6 rounded"
                            style={{ background: '#e8d5a3' }}
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block h-px w-6 rounded"
                            style={{ background: '#e8d5a3' }}
                            animate={menuOpen
                                ? { rotate: -45, y: -6 }
                                : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.25 }}
                        />
                    </motion.button>

                </div>
            </motion.nav>

            {/* ── Mobile Dropdown Menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden fixed top-16 left-0 right-0 z-40 mx-4 rounded-2xl overflow-hidden"
                        style={{
                            background: 'rgba(20,16,8,0.97)',
                            border: '1px solid rgba(232,213,163,0.15)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                        }}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="p-6 space-y-1">
                            {navLinks.map(({ href, label }, i) => (
                                <motion.div
                                    key={href}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Link
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span
                                            className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                                            style={{
                                                color: '#c4aa78',
                                                fontFamily: 'Georgia, serif',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'rgba(232,213,163,0.06)';
                                                e.currentTarget.style.color = '#e8d5a3';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = '#c4aa78';
                                            }}
                                        >
                                            {label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Auth Buttons */}
                           {isPending ? (<span className="loading loading-spinner text-warning"></span>) : user ? ( <div className="pt-4 mt-2 flex flex-col gap-2"
                                style={{ borderTop: '1px solid rgba(232,213,163,0.1)' }}>
                                     <h2 className='text-[#e8d5a3] font-semibold'>Hello,{user.name}</h2>
                                    
                                <Link href="/login" onClick={() => setMenuOpen(false)}>
                                    <button
                                        className="w-full py-2.5 rounded-xl text-sm font-semibold"
                                        onClick={async()=> await authClient.signOut()}
                                        style={{
                                            border: '1px solid rgba(232,213,163,0.3)',
                                            color: '#e8d5a3',
                                            fontFamily: 'Georgia, serif',
                                        }}
                                    >
                                        Logout
                                    </button>
                                </Link>
                               
                            </div>):  <div className="pt-4 mt-2 flex flex-col gap-2"
                                style={{ borderTop: '1px solid rgba(232,213,163,0.1)' }}>
                                <Link href="/login" onClick={() => setMenuOpen(false)}>
                                    <button
                                        className="w-full py-2.5 rounded-xl text-sm font-semibold"
                                        style={{
                                            border: '1px solid rgba(232,213,163,0.3)',
                                            color: '#e8d5a3',
                                            fontFamily: 'Georgia, serif',
                                        }}
                                    >
                                        Log In
                                    </button>
                                </Link>
                                <Link href="/signup" onClick={() => setMenuOpen(false)}>
                                    <button
                                        className="w-full py-2.5 rounded-xl text-sm font-semibold"
                                        style={{
                                            background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                                            color: '#0f0c07',
                                            fontFamily: 'Georgia, serif',
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </div>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;