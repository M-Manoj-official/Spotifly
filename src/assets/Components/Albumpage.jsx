import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const Albumpage = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { playwithid } = useContext(PlayerContext);

  useEffect(() => {
    const url = 'https://spotgpt-backend.onrender.com/api/album/list';

    axios
      .get(url)
      .then((response) => {
        setAlbums(response.data.albums);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
        setError('Failed to load albums');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const url2 = 'https://spotgpt-backend.onrender.com/api/song/list';

    axios
      .get(url2)
      .then((response) => {
        setSongs(response.data.songs);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
        setError('Failed to load songs');
      });
  }, []);

  const albumData = albums.find((album) => album._id === id) || {};
  const albumSongs = songs.filter((song) => song.album === albumData.name);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Error: {error}
      </div>
    );
  }

  if (!albumData._id) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Album not found.
      </div>
    );
  }

  return (
    <div className="flex-1 text-white p-8 h-[690px] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
        <img
          className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg" 
          src={albumData.image || '/placeholder-album.jpg'} 
          alt={albumData.name}
        />
        <div className="flex-1 min-w-0">
          <h1 className="text-6xl lg:text-7xl font-bold mb-2 truncate">{albumData.name}</h1>
          <p className="text-xl text-gray-400 mb-4">Album • {albumData.desc || 'No description available'}</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-semibold">Tracks ({albumSongs.length})</h2>
        </div>
        <div>
          <ul>
            {albumSongs.length === 0 ? (
              <li className="p-6 text-center text-gray-400">
                No songs found in this album.
              </li>
            ) : (
              albumSongs.map((song, index) => (
                <li
                  key={song._id}
                  onClick={() => playwithid(index)}
                  className="flex items-center justify-between p-4 hover:bg-gray-800/50 cursor-pointer transition-colors duration-200" // Subtle hover effect (semi-transparent gray overlay like Spotify)
                >
                  
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="w-8 text-gray-400 text-sm font-mono">{index + 1}</span>
                    <img
                      className="w-10 h-10 object-cover rounded"
                      src={song.image || '/placeholder-song.jpg'}
                      alt={song.name}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium truncate">{song.name}</p>
                      <p className="text-sm text-gray-400 truncate">{song.album}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 ml-4">
                    <span className="text-sm text-gray-400">{song.duration}</span>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className='flex p-8 m-5 justify-center items-center'>
            <h4 className='text-sm text-[#b3b3b3]'>designed and developed by &copy;Manoj M.</h4>
        </div>
        </div>
      </div>
    </div>
  );
};
