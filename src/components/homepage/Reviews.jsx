'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        id: 1,
        name: 'Sophia Lennox',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sophia',
        rating: 5,
        quote: 'Absolutely spellbinding. I finished it in one sitting and immediately wished I could read it again for the first time.',
        bookTitle: 'The Midnight Library',
        bookGenre: 'Fiction',
    },
    {
        id: 2,
        name: 'James Okafor',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=James',
        rating: 5,
        quote: 'Every page drips with atmosphere. A rare book that makes you feel like you are living inside the story.',
        bookTitle: 'Piranesi',
        bookGenre: 'Fantasy',
    },
    {
        id: 3,
        name: 'Amara Nwosu',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Amara',
        rating: 4,
        quote: 'Beautifully written with characters so real they linger long after the final chapter.',
        bookTitle: 'Normal People',
        bookGenre: 'Literary',
    },
    {
        id: 4,
        name: 'Luca Ferretti',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Luca',
        rating: 5,
        quote: 'A masterclass in suspense. I was holding my breath through the last 100 pages.',
        bookTitle: 'The Silent Patient',
        bookGenre: 'Thriller',
    },
    {
        id: 5,
        name: 'Priya Sharma',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Priya',
        rating: 5,
        quote: 'Profound and deeply moving. Changed how I see the world — not many books can claim that.',
        bookTitle: 'Educated',
        bookGenre: 'Memoir',
    },
    {
        id: 6,
        name: 'Noah Blackwell',
        avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Noah',
        rating: 4,
        quote: 'Wildly imaginative. The world-building is unlike anything I have encountered in modern fiction.',
        bookTitle: 'The Name of the Wind',
        bookGenre: 'Fantasy',
    },
];

// Duplicate for seamless infinite scroll
const doubled = [...reviews, ...reviews];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function ReaderReviews() {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const speed = 0.6; // px per frame

    useAnimationFrame(() => {
        if (paused || !containerRef.current) return;
        const container = containerRef.current;
        const halfWidth = container.scrollWidth / 2;
        const current = x.get();
        const next = current - speed;
        // Reset when first half scrolled out
        x.set(next <= -halfWidth ? 0 : next);
    });

    return (
        <motion.section
            className="py-24 overflow-hidden relative"
            style={{ background: 'linear-gradient(180deg, #0f0c07 0%, #1a1508 100%)' }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Decorative top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
            />

            {/* Heading */}
            <div className="text-center mb-16 px-4">
                <motion.p
                    className="text-xs uppercase tracking-[0.4em] mb-3"
                    style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    What Readers Say
                </motion.p>
                <motion.h2
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                >
                    Voices from the Pages
                </motion.h2>
                <motion.div
                    className="mx-auto mt-4 h-px w-24"
                    style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                />
            </div>

            {/* Carousel */}
            <div
                className="relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Left fade */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, #0f0c07, transparent)' }}
                />
                {/* Right fade */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(270deg, #0f0c07, transparent)' }}
                />

                <motion.div
                    ref={containerRef}
                    className="flex gap-6 w-max px-6"
                    style={{ x }}
                >
                    {doubled.map((review, i) => (
                        <ReviewCard key={`${review.id}-${i}`} review={review} />
                    ))}
                </motion.div>
            </div>

            {/* Decorative bottom border */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
            />
        </motion.section>
    );
}