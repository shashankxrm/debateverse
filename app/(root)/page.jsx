import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const Page = async () => {
    const clerkUser = await currentUser();
    if(!clerkUser) {
        redirect('/sign-in');
        return null;
    }
  return (
    <div>
        User Homepage
    </div>
  )
}

export default Page