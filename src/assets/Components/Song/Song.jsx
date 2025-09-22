import React from 'react'

export const Song = () => {
  return (
    <div className='flex flex-col gap-8 bg-[#121212] absolute top-[72px] left-[428px] right-[5px] text-[#ffffff] m-2 p-8 rounded-xl overflow-y-scroll h-[690px] scrollbar-hide'>
        <div className='flex flex-col gap-4'>
            <h1><b>Top playlists</b></h1>
            <div className='flex flex-row gap-8'>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-17fcf90e959a339da97142dfc0cd92a2_screen.jpg?ts=1668801995" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Today's Top Hits</b></p>
                    <p className='text-sm text-[#b3b3b3]'>The best of pop right now</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://tse2.mm.bing.net/th/id/OIP.zWyPg0_OJkKOYqRtLCc1ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Paradise</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Cold and mild</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-md' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-8c1c49849522f3e17e0776f15dd6e47e_screen.jpg?ts=1617448722" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>2025's Top Hits</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Year of 2025</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <h1><b>Artists</b></h1>
            <div className='flex flex-row gap-8'>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.GXRwozB0ORH12xXu2ojKuAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>XXXTENTACION</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.l8IVB0ff843iDaUrvnD6zAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Imagine Dragons</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.nxwIvtsoHnRTcZMBpxZoTwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Post malone</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[200px] h-[200px] rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.p7siM_5DYNd0IdL6sS6rMQHaHa?w=1400&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Justin Bieber</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Artist</p>
                </div>
            </div>
        </div>
    </div>
  )
}
