import { getFeaturedBooksById } from "@/lib/api/api";
import Image from "next/image";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const book = await getFeaturedBooksById(id);

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="bg-[#1a1a18] border-b border-t border-[#2e2e2b] shadow-xl rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          
          {/* Book Image */}
          <div className="flex justify-center">
            <Image
              src={book.image_url}
              alt={book.title}
              width={350}
              height={500}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-4xl font-bold">
              {book.title}
            </h1>

            <p className="text-lg text-gray-500">
              by {book.author}
            </p>

            <div className="badge badge-primary badge-lg w-fit">
              {book.category}
            </div>

            <p className="text-base leading-7">
              {book.description}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#e8d5a3]">
                ${book.price}
              </span>

              <span className="badge badge-success">
                In Stock - {book.available_quantity}
              </span>
            </div>

            <div className="pt-4">
              <button className="btn bg-[#e8d5a3] text-[#0f0f10] btn-wide">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;