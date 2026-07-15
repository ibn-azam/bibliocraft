"use client";

import BookCard from "@/components/shared/BookCard";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Derive category book counts
  const categoryCounts = useMemo(() => {
    const counts = { All: books.length };
    books.forEach((b) => {
      if (b.category) counts[b.category] = (counts[b.category] || 0) + 1;
    });
    return counts;
  }, [books]);

  // Fetch all books once to get categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        const uniqueCategories = [
          "All",
          ...new Set(data.map((book) => book.category).filter(Boolean)),
        ];
        setAllCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };
    fetchCategories();
  }, []);

  // Re-fetch whenever category or search changes
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory && selectedCategory !== "All")
          params.set("category", selectedCategory);
        if (searchTerm) params.set("search", searchTerm);
        const res = await fetch(`/data.json?${params.toString()}`);
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Failed to load books", err);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [selectedCategory, searchTerm]);

  const handleSearch = () => setSearchTerm(searchInput.trim());
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDrawerOpen(false);
  };
  const clearFilters = () => {
    setSearchInput("");
    setSearchTerm("");
    setSelectedCategory("All");
  };

  const categoryIcon = (cat) => {
    if (cat === "All") return "✦";
    if (cat === "Story") return "📖";
    if (cat === "Tech") return "⚙️";
    if (cat === "Science") return "🔬";
    return "📚";
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden px-4 py-16"
      style={{
        background:
          "linear-gradient(180deg, #0f0c07 0%, #1a1508 60%, #0f0c07 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "#a07840" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "#e8d5a3" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0f0c07)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-12 space-y-3"
        >
          <motion.div variants={fadeUp(0)} className="flex justify-center mb-4">
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

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
          >
            All{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e8d5a3, #a07840)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Books
            </span>
          </motion.h1>

          <motion.div
            className="h-px w-16 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, #e8d5a3, transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          />

          <motion.p
            variants={fadeUp(0.2)}
            className="text-sm"
            style={{ color: "#9a8a6a" }}
          >
            {loading
              ? "Loading..."
              : `${books.length} title${books.length !== 1 ? "s" : ""} available`}
          </motion.p>
        </motion.div>

        {/* Search + Categories row */}
        <motion.div
          variants={fadeUp(0.25)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          {/* Search input */}
          <div className="flex gap-2 flex-1">
            <div
              className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(232,213,163,0.06)",
                border: "1px solid rgba(232,213,163,0.15)",
              }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "#6b5e45" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Search by title or author..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearchTerm("");
                  }}
                  style={{ color: "#6b5e45" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            <motion.button
              onClick={handleSearch}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                color: "#0f0c07",
                fontFamily: "Georgia, serif",
                boxShadow: "0 4px 20px rgba(232,213,163,0.2)",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 6px 24px rgba(232,213,163,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Search
            </motion.button>
          </div>

          {/* Categories drawer trigger */}
          <motion.button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide"
            style={{
              background: "rgba(232,213,163,0.06)",
              border: "1px solid rgba(232,213,163,0.2)",
              color: "#e8d5a3",
              fontFamily: "Georgia, serif",
            }}
            whileHover={{ background: "rgba(232,213,163,0.1)", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            Categories
            {selectedCategory !== "All" && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                  color: "#0f0c07",
                }}
              >
                {selectedCategory}
              </span>
            )}
          </motion.button>
        </motion.div>

        {/* Active filter pill */}
        <AnimatePresence>
          {(selectedCategory !== "All" || searchTerm) && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 mb-6 flex-wrap"
            >
              <span
                className="text-xs"
                style={{ color: "#6b5e45", fontFamily: "Georgia, serif" }}
              >
                Filtering by:
              </span>
              {selectedCategory !== "All" && (
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(160,120,64,0.2)",
                    border: "1px solid rgba(232,213,163,0.25)",
                    color: "#e8d5a3",
                  }}
                >
                  {categoryIcon(selectedCategory)} {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    style={{ color: "#a07840" }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {searchTerm && (
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(160,120,64,0.2)",
                    border: "1px solid rgba(232,213,163,0.25)",
                    color: "#e8d5a3",
                  }}
                >
                  &ldquo;{searchTerm}&rdquo;
                  <button
                    onClick={() => {
                      setSearchInput("");
                      setSearchTerm("");
                    }}
                    style={{ color: "#a07840" }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <button
                onClick={clearFilters}
                className="text-xs underline"
                style={{ color: "#6b5e45", fontFamily: "Georgia, serif" }}
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Books Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <motion.div
                className="w-10 h-10 rounded-full"
                style={{
                  border: "2px solid rgba(232,213,163,0.15)",
                  borderTopColor: "#e8d5a3",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p
                className="text-sm"
                style={{ color: "#9a8a6a", fontFamily: "Georgia, serif" }}
              >
                Loading books...
              </p>
            </motion.div>
          ) : books.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 space-y-4"
            >
              <div className="text-5xl">📚</div>
              <p
                className="text-lg font-medium"
                style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
              >
                No books found
              </p>
              <p className="text-sm" style={{ color: "#6b5e45" }}>
                Try a different search term or category
              </p>
              <motion.button
                onClick={clearFilters}
                className="px-5 py-2 rounded-xl text-sm font-semibold mt-2"
                style={{
                  background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                  color: "#0f0c07",
                  fontFamily: "Georgia, serif",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear filters
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full z-50 flex flex-col"
              style={{
                width: "280px",
                background: "linear-gradient(180deg, #1a1508 0%, #0f0c07 100%)",
                borderLeft: "1px solid rgba(232,213,163,0.12)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between p-6"
                style={{ borderBottom: "1px solid rgba(232,213,163,0.1)" }}
              >
                <div>
                  <h3
                    className="font-bold text-base"
                    style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
                  >
                    Categories
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "#6b5e45" }}>
                    Filter by genre
                  </p>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(232,213,163,0.06)",
                    color: "#9a8a6a",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Category list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {allCategories.map((cat, i) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <motion.button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-left"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(232,213,163,0.15), rgba(160,120,64,0.1))"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(232,213,163,0.25)"
                          : "1px solid transparent",
                        color: isActive ? "#e8d5a3" : "#9a8a6a",
                        fontFamily: "Georgia, serif",
                      }}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        background: "rgba(232,213,163,0.08)",
                        color: "#e8d5a3",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>
                        {categoryIcon(cat)} {cat === "All" ? "All Books" : cat}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg, #e8d5a3, #c4a05a)"
                            : "rgba(232,213,163,0.08)",
                          color: isActive ? "#0f0c07" : "#6b5e45",
                        }}
                      >
                        {categoryCounts[cat] ?? 0}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Drawer footer */}
              {selectedCategory !== "All" && (
                <div
                  className="p-4"
                  style={{ borderTop: "1px solid rgba(232,213,163,0.1)" }}
                >
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setDrawerOpen(false);
                    }}
                    className="w-full py-2.5 rounded-xl text-sm font-medium"
                    style={{
                      background: "rgba(232,213,163,0.06)",
                      border: "1px solid rgba(232,213,163,0.15)",
                      color: "#9a8a6a",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllBooksPage;
