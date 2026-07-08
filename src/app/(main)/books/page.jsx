import BookCard from '@/components/shared/BookCard';
import { getBooks } from '@/lib/api/api';
import React from 'react';

const AllBooksPage = async() => {
    const books = await getBooks();
    return (
        <div className='container mx-auto py-20 border border-red-500 space-y-4'>

            <div>
                <h2 className='text-5xl font-bold text-center'>All Books</h2>
            </div>
            {/* search bar */}
            <div className='flex gap-2'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <button className='btn text-[#0F0C07] bg-[#D4B77A]'>Search</button>
            </div>
            {/* Catagory btn */}
            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className="btn drawer-button border border-t-[#D4B77A]
                    border-b-[#D4B77A]">Catagories</label>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
            {/* all books */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;