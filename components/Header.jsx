import React from 'react';
import Head from 'next/head';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className='flex flex-row'>
          <Image src="/assets/dvlogo.png" alt="Logo" width={150} height={150} />
          
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </>
  );
};

export default Header;