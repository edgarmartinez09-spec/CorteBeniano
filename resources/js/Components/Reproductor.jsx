import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0); // inicia silenciado (necesario para autoplay)
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    // Garantiza muted y playsInline ANTES de intentar reproducir
    videoRef.current.muted = true;
    videoRef.current.playsInline = true;
    videoRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (volume > 0) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      setVolume(0);
    } else {
      videoRef.current.volume = 0.5;
      videoRef.current.muted = false;
      setVolume(0.5);
    }
  };

  const handleProgress = (e) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setProgress(time);
  };

  const updateProgress = () => {
    if (!videoRef.current) return;
    setProgress(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Video: ocupa todo el contenedor y se recorta por la bolita del padre */}
 <video
  ref={videoRef}
  src={src}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover transform-gpu"
  onTimeUpdate={updateProgress}
  onLoadedMetadata={handleLoadedMetadata}
/>

      {/* Botón central play/pause (visible al hover en desktop) */}
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl bg-black/45 p-4 rounded-full transition-opacity duration-300 
        ${hover ? "opacity-100" : "opacity-0"} md:opacity-0 md:hover:opacity-100`}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      {/* Controles inferiores (se muestran en hover; en móvil suelen no aparecer por no haber hover) */}
      <div
        className={`absolute bottom-2 left-0 right-0 flex items-center gap-3 px-4 transition-opacity duration-300
        ${hover ? "opacity-100" : "opacity-0"} md:opacity-0 md:hover:opacity-100`}
      >
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={progress}
          onChange={handleProgress}
          className="flex-1 h-2 rounded-full accent-white"
        />
        <button
          onClick={toggleMute}
          className="text-white p-2 rounded hover:bg-white/20 transition"
        >
          {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>
    </div>
  );
}
