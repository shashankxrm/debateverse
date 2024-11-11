import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const Header = () => {
return (
    <header className="flex justify-between items-center p-4 text-white">
            <div className='flex flex-row'>
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
                    {/* <Image src="/assets/logo-text.png" className='pt-5 ml-[-10px]' alt="Logo" width={500} height={60} /> */}
                    <h1>DebateVerse</h1>
            </div>
            <div>
                    <SignedIn>
                    <UserButton/>
                    </SignedIn>
            </div>
    </header>
);
};

export default Header;