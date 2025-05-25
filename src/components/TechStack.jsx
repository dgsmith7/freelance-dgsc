import React from "react";

function TechStack() {
  const technologies = [
    {
      category: "Graphics & Visualization",
      items: [
        "Three.js",
        "WebGL",
        "GLSL Shaders",
        "Canvas API",
        "SVG Animation",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      category: "Emerging Technologies",
      items: [
        "Smart Contracts",
        "Blockchain Integration",
        "AI/ML Implementation",
        "NFT Infrastructure",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      category: "Full Stack Development",
      items: ["JavaScript/Node.js", "Python", "React.js", "MongoDB", "Express"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Technical Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Specialized technology stack for creating bespoke digital solutions
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:translate-y-[-5px]"
            >
              {/* Card Header with Icon and Category */}
              <div className="flex items-center p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold">{tech.category}</h3>
              </div>

              {/* Card Content with Skills List */}
              <div className="p-5">
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Primary Languages:</span>{" "}
              JavaScript, Python
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
