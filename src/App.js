import React, { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showText, setShowText] = useState(false);
  const [hideText, setHideText] = useState(false); // State to control text visibility

  const handleYesClick = () => {
    setAnswer("Yes");
    // Set 3 seconds delay before showing the text
    setTimeout(() => {
      setShowText(true); // Show the text
      // Set timeout to hide the text after 3 seconds
  // 3000ms = 3 seconds
    }, 3000); // 3 seconds delay after clicking "Yes"
  };

  const handleTextAnimationEnd = () => {
    setVideoPlaying(true); // Start the video after text animation ends
  };

  const handleVideoEnd = () => {
    setVideoPlaying(false);
    setShowText(false);
    setHideText(false);
    setAnswer(null); // Reset the app to initial state
  };

  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg">Do you want to be my friend?</h1>
      {!answer ? (
        <div className="flex space-x-8">
          <button
            id="yes-btn"
            className="button yes-btn px-8 py-4 rounded-lg text-2xl bg-green-400 hover:bg-green-500 focus:outline-none transform transition-all duration-300"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            id="no-btn"
            className="button no-btn px-8 py-4 rounded-lg text-2xl bg-red-400 hover:bg-red-500 focus:outline-none transform transition-all duration-300"
          >
            No
          </button>
        </div>
      ) : (
        <div className="text-center">
          {showText && !hideText && (
            <h2
              className="text-3xl font-semibold mt-6 animate__animated animate__fadeIn"
              onAnimationEnd={handleTextAnimationEnd}
            >
              I'll always be by your side, through thick and thin. Together, we've got this! ❤️
            </h2>
          )}

          {videoPlaying && (
            <div className="relative w-full h-full bg-black flex items-center justify-center z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
 
                loop
                onEnded={handleVideoEnd}
              >
                <source
                  src="./video1.mp4" // Replace with your video URL
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                {showText && !hideText && (
                  <h2 className="text-4xl font-bold text-white text-center animate__animated animate__fadeIn animate__delay-3s">
                     us after 3 joints... 💫
                  </h2>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
