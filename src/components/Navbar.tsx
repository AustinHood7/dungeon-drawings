import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
        <div className='flex w-full gap-12 px-[6%] pt-8 text-xl justify-between'>
            <Link href='/'><div>Home</div></Link>
            <div>Sign In</div>
        </div>
    </>
  )
}

export default Navbar