'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const StarRating = ({ rating }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className="w-4 h-4"
                fill={star <= rating ? '#e8d5a3' : 'none'}
                stroke={star <= rating ? '#e8d5a3' : '#5a4a2a'}
                strokeWidth={1.5}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
            </svg>
        ))}
    </div>
);

export default function ReviewCard({ review }) {
    const { name, avatar, rating, quote, bookTitle, bookGenre } = review;

    return (
        <motion.div
            className="relative flex-shrink-0 w-80 rounded-2xl p-6 cursor-default"
            style={{
                background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                border: '1px solid #2e2510',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
            whileHover={{
                y: -6,
                borderColor: '#5a4a2a',
                boxShadow: '0 12px 40px rgba(232,213,163,0.08)',
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
        >
            {/* Quote mark */}
            <span
                className="absolute top-4 right-5 text-6xl leading-none select-none"
                style={{ color: '#2e2510', fontFamily: 'Georgia, serif' }}
            >
                
            </span>

            {/* Stars */}
            <StarRating rating={rating} />

            {/* Quote */}
            <p
                className="mt-4 mb-6 text-sm leading-relaxed"
                style={{ color: '#c4aa78', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
                `{quote}`
            </p>

            {/* Divider */}
            <div
                className="mb-4 h-px w-full"
                style={{ background: 'linear-gradient(90deg, #2e2510, transparent)' }}
            />

            {/* Book info */}
            <div
                className="mb-4 flex items-center gap-2"
            >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#a07840" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xs" style={{ color: '#a07840' }}>
                    {bookTitle}
                </span>
                <span
                    className="ml-auto text-xs px-2 py-0.5 rounded-full"
                    style={{ background: '#2e2510', color: '#7a5c28' }}
                >
                    {bookGenre}
                </span>
            </div>

            {/* Reader info */}
            <div className="flex items-center gap-3">
                <div
                    className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid #2e2510' }}
                >
                    <img
                        src={avatar}
                        alt={name}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm font-medium" style={{ color: '#e8d5a3' }}>{name}</p>
                    <p className="text-xs" style={{ color: '#5a4a2a' }}>Verified Reader</p>
                </div>
            </div>
        </motion.div>
    );
}