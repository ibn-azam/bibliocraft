import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li><Link className='text-[#e8d5a3]' href='/'>Home</Link></li>
        <li><Link className='text-[#e8d5a3]' href='/books'>All Books</Link></li>
        <li><Link className='text-[#e8d5a3]' href='/profile'>My Profile</Link></li>
    </>
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div>
      <button className="cursor-pointer text-2xl font-bold text-[#e8d5a3]">Bibliocraft</button>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
     <Link href='/login'>
        <button className='btn bg-[#e8d5a3] text-[#0f0f10] font-semibold hover:bg-[#cbb88b]  hover:text-[#ffffff]'>LogIn</button>
     </Link>
     <Link href='/signup'>
        <button className='btn border border-[#e8d5a3] text-[#e8d5a3] font-semibold hover:bg-[#e8d5a3] hover:text-[#0f0f10]'>SignUp</button>
     </Link>
    </div>
</div>
    );
};

export default Navbar;