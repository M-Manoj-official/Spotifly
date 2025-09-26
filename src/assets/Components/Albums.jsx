import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



 
export const Albums = ({image,name,desc,id}) => {
  
const navigate = useNavigate();  
    return (
        <div  onClick={()=>navigate(`/Spotifly/album/${id}`)}className= 'hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
        <img src={image} alt="album" className='w-[200px] h-[200px] rounded-md'/>
        <p className='mt-2 text-base'><b>{name}</b></p>
        <p className='text-sm text-[#b3b3b3]'>{desc}</p>
        </div>
    )
}