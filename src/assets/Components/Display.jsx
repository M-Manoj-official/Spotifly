import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom';
import { Albums } from './Albums';
import { useNavigate } from 'react-router-dom';
import { Albumpage } from './Albumpage';
import { useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const Display = () => {
    const [albumss, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const url ='https://spotgpt-backend.onrender.com/api/album/list'

        axios.get(url).then((response) => {
            setAlbums(response.data.albums);
            console.log(response.data);
        }).catch((error) => {
            console.error('Error fetching albums:', error);
        });


    }, []);

    useEffect(() => {
        const url2 = 'https://spotgpt-backend.onrender.com/api/song/list'

        axios.get(url2).then((response) => {
            setSongs(response.data.songs);
            console.log(response.data);
        }).catch((error) => {
            console.error('Error fetching songs:', error); 
        });
    }, []);

    const { playwithid } = useContext(PlayerContext);


  return (
    <div className='flex-1 text-white p-8 h-[690px] overflow-y-auto scrollbar-hide'>
        <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>Top playlists</h1>
        <div className='flex flex-row gap-8 overflow-x-auto scrollbar-hide'>
            {albumss.map((album) => (
          <Albums 
            key={album._id} 
            image={album.image} 
            name={album.name} 
            desc={album.desc} 
            id={album._id}
          />
        ))}

                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-17fcf90e959a339da97142dfc0cd92a2_screen.jpg?ts=1668801995" alt="playlist cover" />
                    <p className='mt-2 text-base'><b>Today's Top Hits</b></p>
                    <p className='text-sm text-[#b3b3b3]'>The best of pop right now</p>
                </div>
                 <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://tse2.mm.bing.net/th/id/OIP.zWyPg0_OJkKOYqRtLCc1ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-base'><b>Paradise</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Cold and mild</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-base'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-8c1c49849522f3e17e0776f15dd6e47e_screen.jpg?ts=1617448722" alt="playlist cover" />
                    <p className='mt-2 text-base'><b>2025's Top Hits</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Year of 2025</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <h1 className='font-bold'>Artists</h1>
            <div className='flex flex-row gap-8 overflow-x-auto scrollbar-hide'>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.GXRwozB0ORH12xXu2ojKuAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="artist image" /> {/* Updated alt text for accuracy */}
                    <p className='mt-2 text-base'><b>XXXTENTACION</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.l8IVB0ff843iDaUrvnD6zAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="artist image" />
                    <p className='mt-2 text-base'><b>Imagine Dragons</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.nxwIvtsoHnRTcZMBpxZoTwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="artist image" />
                    <p className='mt-2 text-base'><b>Post malone</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.p7siM_5DYNd0IdL6sS6rMQHaHa?w=1400&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="artist image" />
                    <p className='mt-2 text-base'><b>Justin Bieber</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <h1 className='font-bold'>From Playlist 'Sibi's'</h1>
            <div className='flex flex-row gap-8 overflow-x-auto scrollbar-hide'>
                {songs.map((song,index) => (
                    <div key={song._id} onClick={() => playwithid(index)} className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer flex-shrink-0'>
                        <img className='w-[200px] h-[200px] rounded-md' src={song.image} alt="song cover" />
                        <p className='mt-2 text-base'><b>{song.name}</b></p>
                        <p className='text-sm text-[#b3b3b3]'>{song.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex p-8 m-5 justify-center items-center'>
            <h4 className='text-sm text-[#b3b3b3]'>designed and developed by &copy;Manoj M.</h4>

        </div>
    </div>

  )
}
