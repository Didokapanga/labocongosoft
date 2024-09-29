import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { BsPauseCircleFill } from 'react-icons/bs';
import './VideoPlayer.css'; // Fichier de styles CSS
import { video } from '../../assets/assets';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Fonction pour gérer le clic sur le bouton Play/Pause
    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    // S'arrête après 1 minute automatiquement
    useEffect(() => {
        const video = videoRef.current;
        const timer = setTimeout(() => {
            if (video) {
                video.pause();
                setIsPlaying(false);
            }
        }, 60000); // 1 minute = 60000ms

        return () => clearTimeout(timer);
    }, [isPlaying]);

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                src={video} // Remplace par le chemin de ta vidéo
                className="video"
                onClick={handlePlayPause} // Ajouter pour que la vidéo soit jouée ou mise en pause en cliquant dessus
            />
            <div className="controls">
                <button onClick={handlePlayPause} className="play-button">
                    {isPlaying ? <BsPauseCircleFill size={50} /> : <FaPlayCircle size={50} />}
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
