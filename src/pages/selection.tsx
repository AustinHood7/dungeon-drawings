import React, { useState } from 'react'
import DropdownMenu from '~/components/DropdownMenu'
import Navbar from '~/components/Navbar'
import Link from 'next/link'
import { api } from '~/utils/api';
import Image from 'next/image';
import Loader, { LineWave } from 'react-loader-spinner';

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

  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
    setIsLoading(true);
    const prompt = `${hColor} haired ${race} ${classType} with ${hair} hair wearing ${clothes} in ${setting}, ${medium}`;
    dalle.mutate({ prompt }, {
      onSuccess: (data: any) => {
        console.log(data.data[0].url);
        setImageURL(data.data[0].url);
        setIsLoading(false);
      },
      onError: (error: any) => {
        console.error(error);
        setIsLoading(false);
      }
    });
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-custom bg-cover bg-center bg-no-repeat px-10'>
        <Navbar />
        <h1 className='text-text text-4xl pt-16'>
            Please specify the details of your dream
        </h1>
        <div className='flex justify-center w-full mt-10 items-center gap-20'>
          <div className='flex gap-20'>
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
          <div className='md:translate-x-[22%] md:translate-y-[5%]'>
            {imageURL != "" 
              ? <div className={`border-bg border-2 rounded-xl overflow-hidden shadow-lg transition-opacity duration-500 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-10'}`}>
              <Image src={imageURL} alt="Generated image" width={500} height={500} onLoad={() => setIsImageLoaded(true)} />
            </div>
              : <div className='h-[500px] w-[500px] border-bg border-2 rounded-xl overflow-hidden bg-opaque backdrop-blur shadow-lg'></div>
            }
          </div>
        </div>
        <div className='flex items-center'>
          <Link href='/Selection' passHref className='mt-14'>
            <button className="borders rounded-md py-4 px-8 bg-secondary text-text text-xl opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            onClick={handleClick}>
              Complete
            </button>
          </Link>
          {isLoading ? (
            <div className='translate-y-[15%]'>
            <LineWave
              height="100"
              width="100"
              color="#242423"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              firstLineColor="#242423"
              middleLineColor="#959797"
              lastLineColor="#121212"
            /></div>
          ): null}
        </div>
        
        <h1 className='mt-[2%] text-xl'>
          Custom Fields may lead to inconsistent results
        </h1>
    </div>
  )
}

export default Selection