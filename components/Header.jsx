import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold ml-10">DebateVerse</h1>
      <div>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;