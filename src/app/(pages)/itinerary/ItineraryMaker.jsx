import { Calendar } from '@/components/ui/calendar';
import { itineraryDaysOptions, itineraryOptions, optionLocations } from '@/data/data';
import Button from '@/ui/Button';
import Select from '@/ui/Select';
import Image from 'next/image';
import image from "/public/assets/airplane.jpg"
import React, { useState } from 'react'
import Hero from '@/components/hero/Hero';

const ItineraryMaker = () => {
  const [showModal,setShowModal] = useState(false);
  const handleHideModal = () => setShowModal(false);
  const handleShowModal =() => setShowModal(true);

  return (
    <div className="min-h-screen w-full">
      <div className="relative h-3/5 w-full">
        <Hero
          image={image}
          className="brightness-50 h-screen w-full object-cover"
          mainHeader={'Itinerary Maker'}
          secondaryHeader={'Generate your personalized itinerary'}
        />
        <h3
          className="absolute text-6xl capitalize font-semibold flex items-center justify-center bottom-0 left-0 right-0 top-0 text-white"
        >
          
        </h3>
      </div>
      <div className="relative z-20 -mt-12 h-full w-full flex flex-col items-center">
        <form className="border w-5/6 h-28 border-slate-500 px-4 py-12 rounded-xl bg-blue-600 text-white flex justify-between items-center">
          <div className="flex flex-col items-center gap-1 w-1/4">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              Destination
            </h3>
            <Select data={optionLocations} />  
          </div>
          <div className="flex flex-col items-center gap-1 w-1/4">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              Days 
            </h3>
            <Select data={itineraryDaysOptions} />
          </div>
          <div className="flex flex-col items-center gap-1 w-1/3">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              Type of Itinerary
            </h3>
            <Select data={itineraryOptions}/>
          </div>
          <Button
            label="Generate Itinerary"
            className="mt-6 px-6 py-2 text-[20px] w- bg-white text-blue-600 rounded-xl transition-all hover:bg-[#efefef]"
          />
        </form>
        <div className="w-full mt-36 flex flex-wrap justify-center items-center gap-14">
          
        </div>
      </div>
    </div>
  )
}

export default ItineraryMaker