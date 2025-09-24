import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

export const Libraery = () => {
  return (
    <div className='hidden sm:block w-[400px] h-[690px] bg-[#121212] m-2 p-8 rounded-xl text-white flex flex-col1'>
        <div className='flex flex-row justify-between items-center text-white text-m'>
            <p><b>Your Library</b></p>
            <AiOutlinePlus className='text-2xl' />
        </div>
        <div className='flex flex-col gap-8 mt-5'>
          <div className='bg-[#2a2a2a] rounded-md p-5 flex flex-col gap-2'>
              <h4><b>Create Your Playlist</b></h4>
              <p className='text-sm'>It's easy, we will help you</p>
              <button className='bg-[#f0f0f0] text-[#000000] rounded-full w-[150px] py-2 mt-3 transition duration-200 ease-in-out transform hover:scale-105'><p className='text-sm'><b>Create Playlist</b></p></button>
          </div>

          <div className='bg-[#2a2a2a] rounded-md p-5 flex flex-col gap-2'>
              <h4><b>Let's find some podcasts to follow</b></h4>
              <p className='text-sm'>We'll keep you updated on new episodes</p>
              <button className='bg-[#f0f0f0] text-[#000000] rounded-full w-[150px] py-2 mt-3 transition duration-200 ease-in-out transform hover:scale-105'><p className='text-sm'><b>Browse Podcasts</b></p></button>
          </div>
        </div>

        <div>

        </div>
        

    </div>
  )
}
