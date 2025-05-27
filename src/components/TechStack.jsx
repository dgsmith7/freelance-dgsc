import React from "react";

function TechStack() {
  const skillCategories = [
    {
      category: "Front-End Development",
      items: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Three.js"],
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      category: "Graphics & 3D",
      items: [
        "WebGL",
        "GLSL Shaders",
        "Three.js",
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
      category: "Back-End Development",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Python"],
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
    {
      category: "Blockchain & Web3",
      items: [
        "Smart Contracts",
        "Solidity",
        "Web3.js",
        "NFT Development",
        "DApp Creation",
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
      category: "AI & Machine Learning",
      items: [
        "TensorFlow.js",
        "Python ML",
        "AI Integration",
        "Natural Language Processing",
        "Computer Vision",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <div className="container mx-auto fade-in">
        <h2 className="text-3xl font-bold text-center mb-2">
          Technical Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          With a unique blend of technical expertise and creative vision, I
          deliver solutions others can't provide
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((tech, index) => (
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

        {/* Why Choose My Services section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Why Choose My Services?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Technical Expertise
              </h4>
              <div className="text-gray-600 dark:text-gray-400">
                Advanced knowledge of cutting-edge technologies allows me to
                build solutions that others can't provide.
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Creative Vision</h4>
              <div className="text-gray-600 dark:text-gray-400">
                My background in fine arts combined with technical knowledge
                creates unique, visually stunning solutions.
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Disciplined Approach
              </h4>
              <div className="text-gray-600 dark:text-gray-400">
                Military leadership experience ensures projects are delivered
                with precision, on time, and to specification.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
