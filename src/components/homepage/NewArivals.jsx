import Marquee from "react-fast-marquee";
import React from "react";
import { getBooks } from "@/lib/api/api";

const NewArivals = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div className="bg-[#1a1a18] border-t border-b border-[#2e2e2b] py-5 overflow-hidden">
      <Marquee
        speed={40}
        gradient={true}
        gradientColor="#1a1a18"
        gradientWidth={60}
        pauseOnHover={true}
      >
        {books.map((book, i) => (
          <span
            key={book.id ?? i}
            className="inline-flex items-center gap-2 mx-8"
          >
            <span
              className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded border ${[book.category] ?? "bg-[#2a2a1f] border-[#c5b48a] text-[#e8d5a3]"}`}
            >
              {book.category?.toUpperCase()}
            </span>
            <span className="text-sm font-medium text-[#d4c9b0] whitespace-nowrap">
              ✦ {book.title} | Special Discount on Memberships — 30% off this
              week
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewArivals;
