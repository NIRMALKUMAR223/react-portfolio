import React, { useEffect, useState } from 'react';

function Header() {
  const [typedName, setTypedName] = useState(''); // Start with an empty string
  const name = "Nirmal Kumar"; // Full name to be typed
  const typingSpeed = 200; // Typing speed
  const delayBeforeReset = 1000; // Delay before resetting the animation

  useEffect(() => {
    let index = 0; // Start typing from the first character 'N'
    let count = 0;
    const typingEffect = () => {
      if (index < name.length) {
        if (count === 0) {
          setTypedName((prev) => name.charAt(index));
          count = 1; // Add next character to typedName
        }
        setTypedName((prev) => prev + name.charAt(index)); // Add next character to typedName
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedName('N'); // Reset to an empty string after typing the full name
          index = 0; // Reset index to start typing again
          typingInterval = setInterval(typingEffect, typingSpeed); // Restart typing effect
        }, delayBeforeReset); // Delay before resetting
      }
    };

    // Start the typing effect immediately
    let typingInterval = setInterval(typingEffect, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []); // Only run once on component mount

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover backdrop-grayscale"
      >
        <source src="video/bgc1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of video */}
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1
          className={`text-white font-bold mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
            } sm:text-3xl md:text-3xl lg:text-6xl text-shadow-lg`}
        >
          Hi, I'm {typedName}
        </h1>
        <p
          className={`text-white text-xl mb-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
            } sm:text-l md:text-l lg:text-2xl text-shadow-lg`}
        >
          A passionate Web Developer with expertise in Full-Stack Development, creating responsive and user-friendly digital experiences.        </p>
        <a
          href="resume/Resume.pdf"
          download="Nirmal_Kumar_CV"
          className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </header>

  );
}

export default Header;