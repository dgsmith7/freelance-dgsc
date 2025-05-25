import React from "react";

const skillCategories = [
  {
    name: "Front-End Development",
    skills: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Three.js"],
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
    name: "Graphics & 3D",
    skills: [
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
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    ),
  },
  {
    name: "Blockchain & Web3",
    skills: [
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    name: "AI & Machine Learning",
    skills: [
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
  {
    name: "Back-End Development",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Python"],
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
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
];

function Skills() {
  return (
    <section className="py-16 px-8 bg-white dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto fade-in">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Advanced Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          With a unique blend of technical expertise and creative vision, I
          deliver solutions others can't provide
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header with Icon and Category */}
              <div className="flex items-center p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              {/* Card Content with Skills List */}
              <div className="p-5">
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span>{skill}</span>
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
              <p className="text-gray-600 dark:text-gray-400">
                Advanced knowledge of cutting-edge technologies allows me to
                build solutions that others can't provide.
              </p>
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
              <p className="text-gray-600 dark:text-gray-400">
                My background in fine arts combined with technical knowledge
                creates unique, visually stunning solutions.
              </p>
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
              <p className="text-gray-600 dark:text-gray-400">
                Military leadership experience ensures projects are delivered
                with precision, on time, and to specification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
