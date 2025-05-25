import React from "react";

const projects = [
  {
    id: 1,
    title: "3D Graphics Demo",
    image: {
      small: "/images/3d-graphics-small.webp",
      medium: "/images/3d-graphics-medium.webp",
      large: "/images/3d-graphics-large.webp",
    },
    link: "https://example.com/3d-graphics",
  },
  {
    id: 2,
    title: "Blockchain Smart Contract",
    image: {
      small: "/images/blockchain-small.webp",
      medium: "/images/blockchain-medium.webp",
      large: "/images/blockchain-large.webp",
    },
    link: "https://example.com/blockchain",
  },
  {
    id: 3,
    title: "AI-Powered Web App",
    image: {
      small: "/images/ai-webapp-small.webp",
      medium: "/images/ai-webapp-medium.webp",
      large: "/images/ai-webapp-large.webp",
    },
    link: "https://example.com/ai-webapp",
  },
  {
    id: 4,
    title: "Machine Learning Visualization",
    image: {
      small: "/images/ml-visualization-small.webp",
      medium: "/images/ml-visualization-medium.webp",
      large: "/images/ml-visualization-large.webp",
    },
    link: "https://example.com/ml-visualization",
  },
  {
    id: 5,
    title: "Custom Game Development",
    image: {
      small: "/images/game-dev-small.webp",
      medium: "/images/game-dev-medium.webp",
      large: "/images/game-dev-large.webp",
    },
    link: "https://example.com/game-dev",
  },
];

function Portfolio() {
  return (
    <section className="p-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <h2 className="text-2xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <picture>
              {/* Define multiple image sources for different screen sizes */}
              <source
                srcSet={project.image.large}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={project.image.medium}
                media="(min-width: 640px)"
              />
              <img
                src={project.image.small} // Fallback image for smaller devices
                alt={`Preview of ${project.title}`}
                className="w-full h-48 object-cover"
              />
            </picture>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold group-hover:text-blue-500">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
