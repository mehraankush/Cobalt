"use client"
import React from 'react'
import Link from 'next/link';

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Button } from '@/components/ui/button'
import SheetContentComponent from './SheetContentComponent';
import ThemeSwitch from './ThemeSwitch';
import { useAppSelector } from '@/Redux/hooks';
import { MdFavorite } from 'react-icons/md';
import { signIn, signOut, useSession } from 'next-auth/react';



const NavbarComponent = () => {

  const { data: session } = useSession()
  const cartCount = useAppSelector(state => state.cart.count);

  return (
    <header className='w-full max-w-6xl mx-auto mt-5'>
      <div className='flex justify-between items-center w-full p-3 px-5 lg:px-0'>
        <Link href={'/'}>
          <h1 className='font-bold text-2xl'>Cobalt Meals</h1>
        </Link>
        <div className='flex gap-5 items-center'>
          <ThemeSwitch />
          <Sheet>
            <SheetTrigger className='relative'>
              <MdFavorite size={22} />
              {cartCount > 0 &&
                <p className='absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'>{cartCount}</p>
              }
            </SheetTrigger>
            <SheetContentComponent />
          </Sheet>

          {session ? (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src={session?.user?.image || ''} alt="User Icon" />
                  <AvatarFallback className='uppercase'>{(session?.user?.name)?.slice(1) || 'User'}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='flex flex-col gap-2'>
                <p className='text-center font-medium text-xl'>{session?.user?.name}</p>
                <Button
                  className='text-xl font-medium bg-white px-5 border-blue-400 text-black border hover:bg-slate-100 hover:text-black'
                  onClick={() => signOut()}
                >
                  Signout
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              className='text-xl font-medium  bg-white px-5 border-blue-300 text-black border hover:bg-white hover:text-black'
              onClick={() => signIn()}
            >
              Signin
            </Button>
          )}
        </div>
      </div>
    </header>
  )

}

export default NavbarComponent