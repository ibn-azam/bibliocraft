import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li><Link className='text-[#e8d5a3]' href='/'>Home</Link></li>
        <li><Link className='text-[#e8d5a3]' href='/books'>All Books</Link></li>
        <li><Link className='text-[#e8d5a3]' href='/profile'>My Profile</Link></li>
    </>
    return (
       <div className=" max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="cursor-pointer text-2xl font-bold text-[#e8d5a3]">Bibliocraft</button>
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

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
     {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;