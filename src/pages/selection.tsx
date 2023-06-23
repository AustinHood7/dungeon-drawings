import React from 'react'
import DropdownMenu from '~/components/DropdownMenu'
import Navbar from '~/components/Navbar'
import Link from 'next/link'

function selection() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-gradient-linear px-10'>
        <Navbar />
        <h1 className='text-text text-4xl pt-16'>
            Please specify the details of your dream
        </h1>
        <div className='flex gap-[15%] justify-center w-full mt-10'>
          <div className='flex flex-col justify-center pt-16 gap-20'>
            <DropdownMenu placeholder="Race" options={["Goliath", "Dwarf", "Halfling", "Dragonborn", "Elf", "Gnome", "Human", "Aarakocra"]}/>
            <DropdownMenu placeholder="Class" options={["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]}/>
            <DropdownMenu placeholder="Setting" options={["Field", "Cave", "Tavern", "Sky", "City", "Forest"]}/>
            <DropdownMenu placeholder="Art Medium" options={["Baroque Painting", "Digital Art", "Acryllic Painting", "Illustration", "Photograph"]}/>
          </div>
          <div className='flex flex-col justify-center pt-16 gap-20'>
            <DropdownMenu placeholder="Clothes" options={["Robes", "Farmer", "Warrior"]}/>
            <DropdownMenu placeholder="Hair" options={["Long", "Short", "Bald"]}/>
            <DropdownMenu placeholder="Hair Color" options={["Brown", "Black", "Blonde", "Red", "Blue", "Purple", "Pink"]}/>
            <DropdownMenu placeholder="Skin Color" options={["White", "Black", "Brown", "Pink", "Blue"]}/>
          </div>
        </div>
        <Link href='/selection' passHref className='mt-14'>
          <button className="border-accent rounded-md py-4 px-8 bg-accent text-bg text-xl opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Complete
          </button>
        </Link>
        <h1 className='mt-[2%] text-xl'>
          Custom Fields may lead to inconsistent results
        </h1>
    </div>
  )
}

export default selection