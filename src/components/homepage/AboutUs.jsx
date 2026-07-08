'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '10K+', label: 'Books Available' },
    { value: '500+', label: 'Authors Featured' },
    { value: '50K+', label: 'Happy Readers' },
    { value: '12+', label: 'Genres Covered' },
];

const values = [
    {
        icon: '📖',
        title: 'Curated Selection',
        desc: 'Every book in our library is hand-picked by our editorial team to ensure quality, diversity, and depth.',
    },
    {
        icon: '🌍',
        title: 'Read Anywhere',
        desc: 'Your entire library travels with you. Access your books from any device, anytime, anywhere in the world.',
    },
    {
        icon: '🤝',
        title: 'Community First',
        desc: 'We believe reading is better together. Share reviews, discover recommendations, and connect with fellow readers.',
    },
];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
});

export default function AboutUs() {
    return (
        <section
            className="relative overflow-hidden py-28 px-6 md:px-16"
            style={{ background: 'linear-gradient(180deg, #0f0c07 0%, #1a1508 50%, #0f0c07 100%)' }}
        >
            {/* Decorative top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
            />

            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px]"
                style={{ background: '#a07840' }}
            />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ── Section Label + Heading ── */}
                <motion.div
                    className="text-center mb-20"
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p
                        className="text-xs uppercase tracking-[0.4em] mb-3"
                        style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                    >
                        Our Story
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                    >
                        About{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #e8d5a3, #a07840)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Bibliocraft
                        </span>
                    </h2>
                    <div
                        className="mx-auto mt-4 h-px w-24"
                        style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
                    />
                </motion.div>

                {/* ── Two Column Layout ── */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

                    {/* Left — Story text */}
                    <motion.div
                        className="space-y-6"
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: '#c4aa78', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                        >
                            &quot;A room without books is like a body without a soul.&quot;
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#9a8a6a' }}>
                            Bibliocraft was born from a simple belief — that every person deserves
                            access to great literature. We started as a small team of passionate
                            readers who wanted to make books more accessible, discoverable, and
                            enjoyable in the digital age.
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#9a8a6a' }}>
                            Today, we serve tens of thousands of readers across the globe, offering
                            a carefully curated digital library that spans genres, languages, and
                            generations. Whether you are rediscovering a childhood classic or
                            exploring a debut novel, Bibliocraft is your companion on every page.
                        </p>

                        {/* Signature */}
                        <div className="pt-4 flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #2e2510, #1a1508)',
                                    border: '1px solid rgba(232,213,163,0.2)',
                                }}
                            >
                                📚
                            </div>
                            <div>
                                <p
                                    className="text-sm font-semibold"
                                    style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                                >
                                    The Bibliocraft Team
                                </p>
                                <p className="text-xs" style={{ color: '#5a4a2a' }}>
                                    Founded with love for books
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Decorative book stack card */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        {/* Stacked card effect */}
                        <div
                            className="absolute top-3 left-3 right-3 bottom-0 rounded-2xl"
                            style={{
                                background: 'rgba(232,213,163,0.04)',
                                border: '1px solid rgba(232,213,163,0.08)',
                            }}
                        />
                        <div
                            className="absolute top-1.5 left-1.5 right-1.5 bottom-0 rounded-2xl"
                            style={{
                                background: 'rgba(232,213,163,0.06)',
                                border: '1px solid rgba(232,213,163,0.1)',
                            }}
                        />

                        {/* Main card */}
                        <motion.div
                            className="relative rounded-2xl p-8 space-y-6"
                            style={{
                                background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                                border: '1px solid rgba(232,213,163,0.15)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                            }}
                            whileHover={{
                                y: -4,
                                boxShadow: '0 28px 80px rgba(0,0,0,0.5)',
                                transition: { duration: 0.3 },
                            }}
                        >
                            <p
                                className="text-xs uppercase tracking-widest"
                                style={{ color: '#a07840' }}
                            >
                                Our Mission
                            </p>
                            <p
                                className="text-2xl font-bold leading-snug"
                                style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                            >
                                To make every great story reachable — for every reader, everywhere.
                            </p>
                            <div
                                className="h-px w-full"
                                style={{ background: 'linear-gradient(90deg, #2e2510, transparent)' }}
                            />
                            <p className="text-sm leading-relaxed" style={{ color: '#7a6a4a' }}>
                                We remove the barriers between readers and the stories that move them —
                                through technology, community, and an uncompromising love of books.
                            </p>

                            {/* Genre tags */}
                            <div className="flex flex-wrap gap-2">
                                {['Fiction', 'Science', 'History', 'Fantasy', 'Memoir', 'Poetry'].map(g => (
                                    <span
                                        key={g}
                                        className="text-xs px-3 py-1 rounded-full"
                                        style={{
                                            background: 'rgba(160,120,64,0.12)',
                                            border: '1px solid rgba(160,120,64,0.25)',
                                            color: '#a07840',
                                        }}
                                    >
                                        {g}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Stats Row ── */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                    variants={fadeUp(0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {stats.map(({ value, label }, i) => (
                        <motion.div
                            key={label}
                            className="text-center rounded-2xl py-8 px-4"
                            style={{
                                background: 'linear-gradient(135deg, #1e1a0e, #16120a)',
                                border: '1px solid rgba(232,213,163,0.08)',
                            }}
                            whileHover={{
                                borderColor: 'rgba(232,213,163,0.25)',
                                y: -4,
                                transition: { duration: 0.25 },
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <p
                                className="text-3xl font-bold mb-1"
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    background: 'linear-gradient(135deg, #e8d5a3, #a07840)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {value}
                            </p>
                            <p className="text-xs uppercase tracking-widest" style={{ color: '#5a4a2a' }}>
                                {label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Values Row ── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map(({ icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            className="rounded-2xl p-7 space-y-4"
                            style={{
                                background: 'linear-gradient(135deg, #1e1a0e, #16120a)',
                                border: '1px solid rgba(232,213,163,0.08)',
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                y: -6,
                                borderColor: 'rgba(232,213,163,0.2)',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                style={{
                                    background: 'rgba(160,120,64,0.12)',
                                    border: '1px solid rgba(160,120,64,0.2)',
                                }}
                            >
                                {icon}
                            </div>
                            <h3
                                className="text-lg font-semibold"
                                style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                            >
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#7a6a4a' }}>
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Decorative bottom border */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
            />
        </section>
    );
}