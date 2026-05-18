import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedBooksCard = ({featuredbook}) => {
    const {title,image_url} = featuredbook;
    return (
    <Link href={`books/featuredbooks/${featuredbook.id}`}>
          <div className="hover-3d ">
  {/* content */}
  <figure className=" rounded-2xl">
    <Image src={image_url} alt={title} width={250} height={350}/>
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </Link>
    );
};

export default FeaturedBooksCard;