"use client"
import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { memo, useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { FaArrowRight as ArrowRightIcon } from 'react-icons/fa'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
  const threshold = 50; // Adjust threshold (pixels) for sensitivity

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= threshold) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => window.removeEventListener('scroll', handleScroll); // Clean up
  }, []); 
  

    const pathName = usePathname();
  return (
    <header className={`fixed  w-full scrolledUp`}>
        <div className='max-w-7xl flex lg:mx-auto justify-between p-5 md:px-10 xl:px-0 w-full'>
            <Link href={'/'} className='font-bold text-2xl' >
                <span className='md:block hidden'>
                    ravian.ai
                </span>
                <span className='md:hidden block'>
                    ravian
                </span>
            </Link>

            <div className="md:flex-between hidden w-full max-w-xs">
               <nav className='md:flex-between w-full flex flex-col items-start  gap-5 md:flex-row'>
               {
                    headerLinks.map((i)=>{
                        const isActive = pathName === i.route || pathName.startsWith(`${i.label}/`)
                        return (<Link href={`${i.route}`} className={`${isActive?"font-bold text-xl":"text-md font-[500]"} duration-300`} key={i.route}>
                            {i.label}
                        </Link>)
                    })
                }
               </nav>
            </div>

            <div className="md:flex hidden justify-end ">
               <SignedOut>
               <Link href={"/sign-in"}>
               <Button className='flex gap-2 ease-in duration-100 text-black bg-[#f0f0f0] rounded-full hover:text-[#f0f0f0] hover:bg-black' >
                    <span className=''>Get Started</span><ArrowRightIcon />
                </Button>
               </Link>
               </SignedOut>

               <SignedIn>
                <UserButton />
               </SignedIn>

            </div>
            <div className="md:hidden block">
               <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header