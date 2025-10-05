import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled]=useState(false);

    const toggleMenu =()=>{
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        const handleScoll = ()=>{
            setIsScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScoll)
        return ()=> window.removeEventListener('scroll', handleScoll)

    }, [])

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,.24)]' : ""} `}>
        <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center '>
            {/* Logo */}
            <Link to="/" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </Link>
        
        {/* Deshtop Menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
            <li>
                <a href="#"className='font-semibold tracking-wider text-orange-500'>Home</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>
        </ul>

        {/* Nav Action */}
        <div className='flex items-center gap-x-5'>
            {/* input Field */}
            <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none' />
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch /></button>
            </div>

            <a href="#" className='text-zinc-800 text-2xl'>
                <GoHeartFill />
            </a>
            <a href="#" className='text-zinc-800 text-2xl'>
                <HiShoppingBag />
            </a>

            {/* Hambuger */}
            <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 shadow-xl items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
            <li>
                <a href="#"className='font-semibold tracking-wider text-orange-500'>Home</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>
            <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>

             <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none' />
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch /></button>
            </li>
        </ul>

        </nav>
    </header>
  )
}

export default Navbar
