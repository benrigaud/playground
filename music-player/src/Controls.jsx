function Controls() {
  const playTrack = () => document.querySelector('audio').play()
  const pauseTrack = () => document.querySelector('audio').pause()
  const stopTrack = () => {
    document.querySelector('audio').pause()
    document.querySelector('audio').currentTime = 0;
  }

  return (
    <>
      <button className="play" onClick={playTrack}>Play</button>
      <button className="play" onClick={pauseTrack}>Pause</button>
      <button className="play" onClick={stopTrack}>Stop</button>
    </>
  )
}

export default Controls