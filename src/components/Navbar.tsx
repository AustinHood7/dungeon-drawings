import React from 'react'
import Link from 'next/link'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'

function Navbar() {

  const user = useUser();

  return (
    <>
        <div className='flex w-full gap-12 px-[6%] pt-8 text-xl justify-between'>
            <Link href='/'><div>Home</div></Link>
            {!user.isSignedIn && <SignInButton />}{!!user.isSignedIn && <UserButton />}
        </div>
    </>
  )
}

export default Navbar