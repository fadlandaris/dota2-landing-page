import { React, useRef } from 'react';
import { Navbar, Content } from './components/components';
import { Intro } from './assets/assets';



function App() {
  const videoRef = useRef(null);

  const playWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; 
      videoRef.current.play().catch(error => {
        console.error('Error trying to play the video:', error);
      }); 
    }
  };

  return (
    <main className="relative h-screen w-screen">
      <video ref={videoRef} autoPlay loop muted className="h-full w-full object-cover">
        <source src={Intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <button onClick={playWithSound} className="z-10 absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 bg-blue-500 text-white rounded shadow-lg">
        Enable Sound
      </button>
      
      <Navbar/>
      <Content/>
      
    </main>
  );
}

export default App;
