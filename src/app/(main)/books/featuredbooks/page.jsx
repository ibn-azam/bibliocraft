import FeaturedBooksCard from "@/components/homepage/FeaturedBooksCard";
import { getBooks } from "@/lib/api/api";
import React from "react";

const FeaturedBooksPage = async () => {
  const featuredBooks = await getBooks();
  const books = [1, 4, 6, 9];

  return (
    <section className="py-24 relative overflow-hidden featured-section">
      <style>{`
                /* Section fade-in */
                .featured-section {
                    background: linear-gradient(180deg, #0f0c07 0%, #1a1508 100%);
                }

                /* Top & bottom decorative borders */
                .featured-section::before,
                .featured-section::after {
                    content: '';
                    position: absolute;
                    left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e8d5a3, transparent);
                }
                .featured-section::before { top: 0; }
                .featured-section::after  { bottom: 0; }

                /* Heading reveal */
                .featured-heading {
                    opacity: 0;
                    transform: translateY(28px);
                    animation: fadeSlideUp 0.8s ease-out 0.1s forwards;
                }

                .featured-subtitle {
                    opacity: 0;
                    animation: fadeIn 0.8s ease-out 0.25s forwards;
                }

                .featured-divider {
                    transform: scaleX(0);
                    animation: expandLine 0.6s ease-out 0.45s forwards;
                    transform-origin: center;
                }

                /* Cards staggered entrance */
                .book-card-wrapper {
                    opacity: 0;
                    transform: translateY(60px) scale(0.92);
                    animation: cardEntrance 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }

                .book-card-wrapper:nth-child(1) { animation-delay: 0.3s; }
                .book-card-wrapper:nth-child(2) { animation-delay: 0.45s; }
                .book-card-wrapper:nth-child(3) { animation-delay: 0.6s; }
                .book-card-wrapper:nth-child(4) { animation-delay: 0.75s; }

                /* Hover lift */
                .book-card-wrapper {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .book-card-wrapper:hover {
                    transform: translateY(-8px) scale(1.03);
                }

                /* Keyframes */
                @keyframes fadeSlideUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes expandLine {
                    to { transform: scaleX(1); }
                }
                @keyframes cardEntrance {
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <p
          className="featured-subtitle text-xs uppercase tracking-[0.4em] mb-3"
          style={{ color: "#a07840", fontFamily: "Georgia, serif" }}
        >
          Hand Picked
        </p>
        <h2
          className="featured-heading text-4xl md:text-5xl font-bold"
          style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
        >
          Featured Books
        </h2>
        <div
          className="featured-divider mx-auto mt-4 h-px w-24"
          style={{
            background:
              "linear-gradient(90deg, transparent, #e8d5a3, transparent)",
          }}
        />
      </div>

      {/* Cards grid */}
      <div className="container mx-auto flex justify-center gap-6 items-center flex-wrap px-4">
        {books.map((_, index) => {
          const featuredbook = featuredBooks[index];
          return featuredbook ? (
            <div key={featuredbook.id} className="book-card-wrapper">
              <FeaturedBooksCard featuredbook={featuredbook} />
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default FeaturedBooksPage;
