import React from "react";

function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="py-24 px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-3xl fade-in">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Bespoke Digital Solutions{" "}
          <span className="text-primary">Through Advanced Technology</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
          Specializing in cutting-edge web development with expertise in 3D
          graphics, blockchain technology, artificial intelligence, and machine
          learning.
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
    </section>
  );
}

export default Hero;
