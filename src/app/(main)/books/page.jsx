'use client';

import BookCard from '@/components/shared/BookCard';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // fetch full list once to derive category list for the drawer
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('/api/books');
                const data = await res.json();
                const uniqueCategories = [
                    'All',
                    ...new Set(data.map((book) => book.category).filter(Boolean)),
                ];
                setAllCategories(uniqueCategories);
            } catch (err) {
                console.error('Failed to load categories', err);
            }
        };
        fetchCategories();
    }, []);

    // re-fetch filtered books whenever category or search term changes
    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (selectedCategory && selectedCategory !== 'All') {
                    params.set('category', selectedCategory);
                }
                if (searchTerm) {
                    params.set('search', searchTerm);
                }
                const res = await fetch(`/api/books?${params.toString()}`);
                const data = await res.json();
                setBooks(data);
            } catch (err) {
                console.error('Failed to load books', err);
                setBooks([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [selectedCategory, searchTerm]);

    const handleSearch = () => setSearchTerm(searchInput.trim());
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setDrawerOpen(false);
    };

    return (
        <div className='container mx-auto py-20 space-y-6'>
            <div>
                <h2
                    className='text-5xl font-bold text-center'
                    style={{ color: '#e8d5a3', fontFamily: '"Playfair Display", serif' }}
                >
                    All Books
                </h2>
            </div>

            {/* search bar */}
            <div className='flex gap-2 justify-center'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        placeholder="Search by title or author"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </label>
                <button
                    onClick={handleSearch}
                    className='btn'
                    style={{
                        background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                        color: '#0f0c07',
                        border: 'none',
                    }}
                >
                    Search
                </button>
            </div>

            {/* category trigger */}
            <div className='flex justify-center'>
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="btn"
                    style={{ borderColor: '#c4a05a', color: '#e8d5a3', background: 'transparent' }}
                >
                    Categories {selectedCategory !== 'All' && `(${selectedCategory})`}
                </button>
            </div>

            {/* slide-in drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                            className='fixed inset-0 bg-black/60 z-40'
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className='fixed top-0 right-0 h-full w-80 z-50 p-6 overflow-y-auto'
                            style={{ background: '#1a1508', borderLeft: '1px solid #a07840' }}
                        >
                            <h3 className='text-2xl font-bold mb-4' style={{ color: '#e8d5a3' }}>
                                Categories
                            </h3>
                            <ul className='space-y-2'>
                                {allCategories.map((category) => (
                                    <li key={category}>
                                        <button
                                            onClick={() => handleCategorySelect(category)}
                                            className='w-full text-left px-4 py-2 rounded transition-colors'
                                            style={{
                                                background: selectedCategory === category ? 'rgba(232,213,163,0.12)' : 'transparent',
                                                color: selectedCategory === category ? '#e8d5a3' : '#c4a05a',
                                            }}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* results */}
            {loading ? (
                <div className='text-center py-10' style={{ color: '#c4a05a' }}>Loading books...</div>
            ) : books.length === 0 ? (
                <div className='text-center py-10' style={{ color: '#c4a05a' }}>No books found.</div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book}></BookCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBooksPage;