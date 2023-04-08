function Track({src, name, artist}) {
  return (
    <>
      <audio controls>
        <source src={src} type="audio/mp3" />
      </audio>
      <p className="track-title">{name}</p>
      <p className="track-artist">{artist}</p>
    </>
  )
}

export default Track