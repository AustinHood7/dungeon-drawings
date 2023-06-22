import React from 'react'
import Navbar from '~/components/Navbar'

function selection() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-gradient-linear'>
        <Navbar />
        <h1 className='text-text text-4xl pt-16'>
            Please specify the details of your dream
        </h1>
    </div>
  )
}

export default selection