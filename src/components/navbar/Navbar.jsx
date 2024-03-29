"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../auth/Authprovider';
import toast from 'react-hot-toast';

// ....navbar....
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = async () => {
        try {
          await logOut();
          toast.success('Sign out successful');
        } catch (error) {
          console.error('Logout failed:', error);
          toast.error('Sign out failed. Please try again.');
        }
      };

    return (
        <div>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
            
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            <li>
                            <Link href="/home">Home</Link>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/customers">Customer</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                   <div className='flex gap-2'>
                  
                   <Image className='rounded-full' src="https://i.ibb.co/5LFVvdk/logo-white.webp"
      alt="Picture of the author" width={50} height={40} />
       <div className='xl:block lg:block md:block hidden'>
       <Link href="/" className="btn btn-ghost text-xl">ScheduleMeet</Link>
       </div>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/customers">Customer</Link></li>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link href="/#" className="border-[2px] hover:bg-[#4F43A1] hover:border-transparent rounded-full px-4 py-[5px]">Sign up</Link> */}
                    {
                        user && <h1 className="pr-2"><span className="font-bold">user:</span>{user.displayName}</h1>
                    }
                    {
                        user ?
                            <button onClick={handleLogout} className="btn btn-sm btn-primary">log out</button>
                            :

                            <Link href="/login"><button className="btn  btn-sm btn-primary">log in</button></Link>

                    }
               
                </div>
            </div>
        </div>
    );
};

export default Navbar;