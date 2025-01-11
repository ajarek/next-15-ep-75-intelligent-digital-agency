'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const MobileNav = () => {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetClose asChild>
        <SheetContent
          side='left'
          className='border-none bg-primary   shadow-none lg:hidden '
          aria-describedby='mobile-nav'
        >
          <SheetTitle className='text-xl font-semibold uppercase italic '>
            <Link
              href='/'
              aria-label='Stron Główna'
            >
             Digital Agency
            </Link>
          </SheetTitle>
          <div className='flex flex-col gap-4 text-xl mt-4 '>
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
            aria-label='Services'
            className=''
            href='/services'
          >
            Services
          </Link>

          <Link
            aria-label='Reviews'
            href='/reviews'
            className=''
          >
            Reviews
          
            </Link>
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav
