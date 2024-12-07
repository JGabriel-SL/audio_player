import React, { useState, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null); // Referência para o elemento de áudio
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual do áudio
  const [duration, setDuration] = useState(0); // Duração total do áudio

  // Inicia ou pausa o áudio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Atualiza o tempo atual durante a reprodução
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Define a duração total do áudio quando carrega
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Permite o usuário buscar uma posição específica
  const handleSeek = (event) => {
    const newTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Formata o tempo (em segundos) para mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <audio
        ref={audioRef}
        src="/audio/audio-trabalho-fisica.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div style={styles.controls}>
        <button onClick={togglePlay} style={styles.button}>
          {isPlaying ? "Pausar" : "Tocar"}
        </button>
        <span style={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
        style={styles.slider}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    marginBottom: "30px",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  time: {
    fontSize: "14px",
    color: "#333",
  },
  slider: {
    width: "80%",
    marginTop: "10px",
  },
};

export default AudioPlayer;
