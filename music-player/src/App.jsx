import './App.scss'
import Controls from './Controls'
import Track from './Track'

function App() {

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Track 
        src='../src/assets/Lost.mp3' 
        name='Lost' 
        artist='Frank Ocean'
      />
      <Controls />
    </div>
  )
}

export default App