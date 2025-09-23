import React from 'react'
import { useState } from 'react'
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaRepeat } from "react-icons/fa6";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PiScreencast } from "react-icons/pi";
import { AiOutlineFullscreen } from "react-icons/ai";

export const MiniPlayer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isMute, setIsMute] = useState(false);

    const handleShuffle = () => {
        setIsShuffled(!isShuffled);
    }

    const handlePlayPause = () => {
        setIsActive(!isActive);
    }

    const handleMute = () => {
        setIsMute(!isMute);
    }

  return (
    <div className='w-full h-20 bg-[#181818] absolute bottom-0 left-0 flex items-center justify-between px-4'>
        <div className='flex items-center gap-4'>
            <img className='rounded-md w-15 h-15' src="https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431" alt="Album Cover" />
            <div>
                <p className='text-white'><b>Peaches</b></p>
                <p className='text-sm text-[#b3b3b3]'>The Kid LAROI, Justin Bieber</p>
            </div>
        </div>

        <div className="text-white flex flex-col items-center gap-3">
            <div className='flex items-center gap-4'>
                {isShuffled ? (
                    <button onClick={handleShuffle}><FaShuffle /></button>
                ) : (
                    <button onClick={handleShuffle}><RiOrderPlayFill /></button>
                )}
                <button><FaBackwardStep /></button>
                {isActive ? (
                    <button onClick={handlePlayPause}><FaPause /></button>
                ) : (
                    <button onClick={handlePlayPause}><FaPlay /></button>
                )}
                <button><FaForwardStep /></button>
                <button><FaRepeat /></button>
                {isMute ? (
                    <button onClick={handleMute}><FaVolumeXmark /></button>
                ) : (
                    <button onClick={handleMute}><FaVolumeHigh /></button>
                )}
            </div>
            <div className='w-96 h-1 bg-[#404040] rounded-full mt-2'>
                <div className='w-1/2 h-1 bg-[#ffffff] rounded-full'></div>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center gap-2 text-white'>
                <button><BsFilePlay/></button>
                <button><TbMicrophone2/></button>
                <button><MdOutlineQueueMusic/></button>
                <button><LuMonitorSpeaker/></button>
                <button><HiMiniSpeakerWave/></button>
                <div className='w-15 h-1 bg-[#404040] rounded-full mt-2 flex items-center'>
                    <div className='w-3/4 h-1 bg-[#ffffff] rounded-full'></div>
                </div>
                <button><PiScreencast/></button>
                <button><AiOutlineFullscreen/></button>
            </div>
        </div>
    </div>

  )
}
