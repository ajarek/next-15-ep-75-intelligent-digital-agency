'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

import Image from 'next/image'
const Navbar = () => {
  
  return (
    <div className='max-w-7xl mx-auto h-12  px-4  w-full z-10 bg-secondary'>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
        <Link
          aria-label='Stron Główna'
          href='/'
          className='flex items-center gap-2'
        >
          <Image
            src='/images/logo.jpg'
            alt='logo'
            width={40}
            height={40}
          />
          <h1 className='text-2xl font-bold '>Digital Agency</h1>
        </Link>
        <ul className='flex items-center gap-4 max-lg:hidden text-lg'>
          <Link
            aria-label='contact'
            className=''
            href='/contact'
          >
            Contact
          </Link>
          <Link
            aria-label='about us'
            className=''
            href='/about'
          >
            About us
          </Link>
          <Link
            aria-label='profile'
            className=''
            href='/profile'
          >
            Profile
          </Link>

          <Link
            aria-label='Team'
            href='/team'
            className=''
          >
            Team
          </Link>
        </ul>
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
