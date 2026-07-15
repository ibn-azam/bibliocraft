"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const BookCard = ({ book }) => {
  const { title, image_url } = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          src={image_url}
          alt={title}
          width={300}
          height={300}
          className="rounded-xl h-70"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <Link href={`books/featuredbooks/${book.id}`}>
            <motion.button
              className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                color: "#0f0c07",
                fontFamily: "Georgia, serif",
                boxShadow: "0 2px 12px rgba(232,213,163,0.2)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(232,213,163,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
