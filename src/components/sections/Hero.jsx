import React, { useEffect, useRef } from "react";

function Hero({ scrollToSection }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Explicitly mute the video in JavaScript as well
      videoElement.muted = true;

      // Set up a load event handler
      const handleCanPlay = () => {
        videoElement
          .play()
          .catch((error) => console.error("Video play failed:", error));
      };

      videoElement.addEventListener("canplay", handleCanPlay);

      // Try to play immediately as well
      if (videoElement.readyState >= 3) {
        videoElement
          .play()
          .catch((error) => console.error("Video play failed:", error));
      }

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="py-24 px-8 relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Video background */}
      <video
        ref={videoRef} // <-- Add this reference connection
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        //       preload="auto"
      >
        <source src="/videos/skyHalftone.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/70 dark:bg-gray-900/80 z-10"></div>

      {/* Content */}

      <div className="container mx-auto max-w-3xl fade-in relative z-20">
        <div className="bg-gray-200/10 dark:bg-gray-700/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-gray-900 dark:text-gray-100">
            Bespoke Digital Solutions{" "}
            <span className="text-primary">Through Advanced Technology</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
            Specializing in cutting-edge full-stack web development with
            expertise in 3D graphics, blockchain technology, artificial
            intelligence, and machine learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-5 py-2.5 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
