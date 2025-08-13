import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0); // volumen inicial silenciado
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hover, setHover] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      videoRef.current.volume = 0;
      setVolume(0);
    } else {
      videoRef.current.volume = 0.5;
      setVolume(0.5);
    }
  };

  const handleProgress = (e) => {
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setProgress(time);
  };

  const updateProgress = () => {
    setProgress(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  return (
    <div
      className="relative w-full h-full bg-black"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={volume === 0}
        loop
        playsInline
        className="w-full h-full object-cover"
        onTimeUpdate={updateProgress}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Botón central play/pause */}
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl bg-black/50 p-4 rounded-full transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      {/* Controles */}
      <div
        className={`absolute bottom-2 left-0 w-full flex items-center justify-between px-4 transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Barra de progreso */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={progress}
          onChange={handleProgress}
          className="flex-1 h-2 rounded-full accent-white"
        />

        {/* Botón de volumen */}
        <button
          onClick={toggleMute}
          className="text-white ml-4 p-2 rounded hover:bg-white/20 transition"
        >
          {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>
    </div>
  );
}
