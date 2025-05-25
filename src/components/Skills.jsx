import React from "react";

function Skills() {
  return (
    <section className="p-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <h2 className="text-2xl font-bold text-center mb-6">Advanced Skills</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          I specialize in cutting-edge technologies and have extensive
          experience in:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>3D Graphics with Three.js, GLSL, and WebGL</li>
          <li>Blockchain Development and Smart Contracts</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Game Development</li>
          <li>Full-stack Web Development (Frontend and Backend)</li>
        </ul>
        <p>
          Explore my{" "}
          <a href="#portfolio" className="text-primary hover:underline">
            Portfolio
          </a>{" "}
          to see examples of my work.
        </p>
      </div>
    </section>
  );
}

export default Skills;
