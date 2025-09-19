import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

export const Libraery = () => {
  return (
    <div className='bg-[#121212] text-white h-[702px] w-[420px] p-3'>
        <div className='flex flex-row justify-between items-center text-white text-m'>
            <p>Your Library</p>
            <AiOutlinePlus className='text-2xl' />
        </div>
        <div className='bg-[#2a2a2a] rounded-md'>
            <h2>Create Your Playlist</h2>
            <h4>It's easy, we will help you</h4>
            <button>Create</button>
        </div>
        <div></div>

    </div>
  )
}
