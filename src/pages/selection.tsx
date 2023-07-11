import React, { useState } from 'react'
import DropdownMenu from '~/components/DropdownMenu'
import Navbar from '~/components/Navbar'
import Link from 'next/link'
import { api } from '~/utils/api';

function Selection() {
  const dalle = api.example.dalle.useMutation();

  const [race, setRace] = useState("");
  const [classType, setClassType] = useState("");
  const [setting, setSetting] = useState("");
  const [medium, setMedium] = useState("");
  const [clothes, setClothes] = useState("");
  const [hair, setHair] = useState("");
  const [hColor, setHcolor] = useState("");
  const [sColor, setScolor] = useState("");

  const handleRaceChange = (selectedRace: string) => {
    setRace(selectedRace);
  };

  const handleClassChange = (selectedClass: string) => {
    setClassType(selectedClass);
  };

  const handleSettingChange = (selectedSetting: string) => {
    setSetting(selectedSetting);
  };

  const handleMediumChange = (selectedMedium: string) => {
    setMedium(selectedMedium);
  };

  const handleClothesChange = (selectedClothes: string) => {
    setClothes(selectedClothes);
  };

  const handleHairChange = (selectedHair: string) => {
    setHair(selectedHair);
  };
  
  const handleHcolorChange = (selectedHcolor: string) => {
    setHcolor(selectedHcolor);
  };

  const handleScolorChange = (selectedScolor: string) => {
    setScolor(selectedScolor);
  };

  const handleClick = () => {
    const prompt = `${hColor} haired ${race} ${classType} with ${hair} wearing ${clothes} in ${setting}, ${medium}`;
    dalle.mutate({ prompt }, {
      onSuccess: (data: any) => {
        // Handle success
        console.log(data);
      },
      onError: (error: any) => {
        // Handle error
        console.error(error);
      }
    });
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-custom px-10'>
        <Navbar />
        <h1 className='text-text text-4xl pt-16'>
            Please specify the details of your dream
        </h1>
        <div className='flex gap-[15%] justify-center w-full mt-10'>
          <div className='flex flex-col justify-center pt-16 gap-20'>
            <DropdownMenu placeholder="Race" options={["Goliath", "Dwarf", "Halfling", "Dragonborn", "Elf", "Gnome", "Human", "Aarakocra"]} onChange={handleRaceChange}/>
            <DropdownMenu placeholder="Class" options={["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]} onChange={handleClassChange}/>
            <DropdownMenu placeholder="Setting" options={["Field", "Cave", "Tavern", "Sky", "City", "Forest"]} onChange={handleSettingChange}/>
            <DropdownMenu placeholder="Art Medium" options={["Baroque Painting", "Digital Art", "Acryllic Painting", "Illustration", "Photograph"]} onChange={handleMediumChange}/>
          </div>
          <div className='flex flex-col justify-center pt-16 gap-20'>
            <DropdownMenu placeholder="Clothes" options={["Robes", "Farmer", "Warrior"]} onChange={handleClothesChange}/>
            <DropdownMenu placeholder="Hair" options={["Long", "Short", "Bald"]} onChange={handleHairChange}/>
            <DropdownMenu placeholder="Hair Color" options={["Brown", "Black", "Blonde", "Red", "Blue", "Purple", "Pink"]} onChange={handleHcolorChange}/>
            <DropdownMenu placeholder="Skin Color" options={["White", "Black", "Brown", "Pink", "Blue"]} onChange={handleScolorChange}/>
          </div>
        </div>
        <Link href='/Selection' passHref className='mt-14'>
          <button className="border-accent rounded-md py-4 px-8 bg-accent text-bg text-xl opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
          onClick={handleClick}>
            Complete
          </button>
        </Link>
        <h1 className='mt-[2%] text-xl'>
          Custom Fields may lead to inconsistent results
        </h1>
    </div>
  )
}

export default Selection