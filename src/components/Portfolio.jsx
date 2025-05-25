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
    link: "https://dgsmith7.github.io/micro-encabulator-site/",
    description:
      "An immersive 3d graphics experience designed to showcase a specific product or to explain and educate.",
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
    description:
      "A secure and efficient blockchain-based smart contract implementation.",
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
    description:
      "A web application leveraging AI to deliver personalized user experiences.",
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
    description:
      "Interactive visualizations to make machine learning concepts more accessible.",
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
    description:
      "A custom-built game designed for entertainment and engagement.",
  },
  {
    id: 6,
    title: "IPFS Ecosystem",
    image: {
      small: "/images/ipfs-ecosystem-small.webp",
      medium: "/images/ipfs-ecosystem-medium.webp",
      large: "/images/ipfs-ecosystem-large.webp",
    },
    link: "https://example.com/ipfs-ecosystem",
    description:
      "A decentralized ecosystem leveraging IPFS for distributed storage and sharing.",
  },
  {
    id: 7,
    title: "Artist Portfolio",
    image: {
      small: "/images/artist-portfolio-small.webp",
      medium: "/images/artist-portfolio-medium.webp",
      large: "/images/artist-portfolio-large.webp",
    },
    link: "https://example.com/artist-portfolio",
    description:
      "A visually stunning portfolio showcasing an artist's work and creative journey.",
  },
  {
    id: 8,
    title: "Microservice / Custom API",
    image: {
      small: "/images/microservice-small.webp",
      medium: "/images/microservice-medium.webp",
      large: "/images/microservice-large.webp",
    },
    link: "",
    description:
      "A scalable and efficient microservice or custom API tailored to meet specific business needs.",
  },
];

function Portfolio() {
  return (
    <section className="p-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <h2 className="text-2xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const content = (
            <div className="group block overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <picture>
                <source
                  srcSet={project.image?.large || ""} // Use empty string if large image is missing
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={project.image?.medium || ""} // Use empty string if medium image is missing
                  media="(min-width: 640px)"
                />
                <img
                  src={project.image?.small || "/images/placeholder.webp"} // Fallback for small images
                  alt={`Preview of ${project.title}`}
                  className="w-full object-cover aspect-w-3 aspect-h-2"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "/images/placeholder.webp"; // Load placeholder if image fails
                  }}
                />
              </picture>
              <div className="p-3 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold group-hover:text-blue-500">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          );

          return project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={project.id}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
