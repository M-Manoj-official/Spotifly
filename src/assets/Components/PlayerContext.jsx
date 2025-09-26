import axios from "axios";
import { createContext, useEffect, useState, useRef } from "react";

export const PlayerContext = createContext();

const PlayerProvider = (props) => {
    const audioRef = useRef(null); // Initialize as null
    const seekBG = useRef(null);
    const seekBar = useRef(null);
    const [track, setTrack] = useState(null);
    const [post, setPost] = useState([]);
    const [playStatus, setPlayStatus] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [time, setTime] = useState({
        currentTime: { seconds: 0, minutes: 0 },
        totalTime: { seconds: 0, minutes: 0 }
    });

    // Fetch initial track
    useEffect(() => {
        const url = 'https://spotgpt-backend.onrender.com/api/song/list';
        axios.get(url).then((res) => {
            if (res.data?.songs?.[0]) {
                setPost(res.data.songs);
                setTrack(res.data.songs[0]);
                console.log(res.data.songs[2]);
            } else {
                console.error('No albums found in response');
            }
        }).catch((error) => {
            console.error('Error fetching albums:', error);
        });
    }, []);

    // Set audio src when track changes
    useEffect(() => {
        if (track?.preview_url && audioRef.current) {
            audioRef.current.src = track.preview_url;
            audioRef.current.load(); // Reload if needed
        }
    }, [track]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            const current = audio.currentTime;
            const duration = audio.duration || 0;
            setTime({
                currentTime: {
                    seconds: Math.floor(current % 60),
                    minutes: Math.floor(current / 60)
                },
                totalTime: {
                    seconds: Math.floor(duration % 60),
                    minutes: Math.floor(duration / 60)
                }
            });
        };

        const handleLoadedMetadata = () => {
            updateTime();
        };

        const handleTimeUpdate = () => {
            updateTime();
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [track]);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    };

    const next = () => {
        if (post.length === 0) return;
        const currentIndex = post.findIndex(t => t._id === track._id);
        const nextIndex = (currentIndex + 1) % post.length;
        setTrack(post[nextIndex]);
        if (playStatus) {
            audioRef.current.play();
        }
    };
    const previous = () => {
        if (post.length === 0) return;
        const currentIndex = post.findIndex(t => t._id === track._id); 
        const prevIndex = (currentIndex - 1 + post.length) % post.length;
        setTrack(post[prevIndex]);
        if (playStatus) {
            audioRef.current.play();
        }
    };

    const loop = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const shuffled = () => {
        setShuffle(true);
    };

    const notShuffled = () => {
        setShuffle(false);
    }

       const playwithid = async(id) => {
        await setTrack(post[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }



    const handleSeek = (e) => {
        if (audioRef.current && seekBG.current) {
            const rect = seekBG.current.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = percent * audioRef.current.duration;
        }
    };

    const contextValue = {
        audioRef,
        seekBG,
        seekBar,
        track,
        setTrack,
        playStatus,
        shuffle,
        shuffled,
        notShuffled,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        next,
        previous,
        loop,
        playwithid,
        handleSeek // Expose for seek bar clicks
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {/* Hidden audio element */}
            {track && (
                <audio ref={audioRef} preload="metadata">
                    Your browser does not support the audio element.
                </audio>
            )}
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;
