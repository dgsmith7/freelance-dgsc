import React, { useState, useEffect, useRef } from "react";

/**
 * Project data for portfolio section
 * Each project contains title, description, link and image paths in various sizes
 */
const projects = [
  {
    id: 1,
    title: "3D Graphics Product / Concept Demo",
    image: {
      small: "/images/3d-graphics-small.webp",
      medium: "/images/3d-graphics-medium.webp",
      large: "/images/3d-graphics-large.webp",
    },
    link: "https://dgsmith7.github.io/micro-encabulator-site/",
    description:
      "An immersive 3d graphics experience designed to showcase a specific product or to explain and educate.",
    categories: [],
  },
  {
    id: 2,
    title: "Blockchain Smart Contract",
    image: {
      small: "/images/blockchain-small.webp",
      medium: "/images/blockchain-medium.webp",
      large: "/images/blockchain-large.webp",
    },
    link: "https://dgs-creative.com",
    description:
      "A secure and efficient personal NFT mint on the Arbitrum One network with a custom Solidty Smart Contract.  Allows digital artists to take full control of their NFT sales.",
  },
  // {
  //   id: 3,
  //   title: "AI-Powered Web App",
  //   image: {
  //     small: "/images/ai-webapp-small.webp",
  //     medium: "/images/ai-webapp-medium.webp",
  //     large: "/images/ai-webapp-large.webp",
  //   },
  //   link: "",
  //   description:
  //     "PAISLEY - Psychedeleic AI Song Lyric Generator. A web application leveraging AI to deliver a fun and novel experience.  Runs on Llama 4 Scout model on a CPU-only platform.  Can be deployed on GPU for higher performance.",
  // },
  // {
  //   id: 4,
  //   title: "E-commerce Platform",
  //   image: {
  //     small: "/images/ml-visualization-small.webp",
  //     medium: "/images/ml-visualization-medium.webp",
  //     large: "/images/ml-visualization-large.webp",
  //   },
  //   link: "",
  //   description:
  //     "Custom and personalized marketplace platform for buying and selling products, with advanced features and user-friendly design.",
  // },
  {
    id: 5,
    title: "Custom Game Development",
    image: {
      small: "/images/game-dev-small.webp",
      medium: "/images/game-dev-medium.webp",
      large: "/images/game-dev-large.webp",
    },
    link: "",
    description:
      "Rex Nemorensis - A custom turn-based text adventure where players compete against a trained AI opponent or each other.",
  },
  {
    id: 6,
    title: "Deep-Q Network / Custom API",
    image: {
      small: "/images/deepq-small.webp",
      medium: "/images/deepq-medium.webp",
      large: "/images/deepq-large.webp",
    },
    link: "",
    description:
      "A custom Deep-Q network for reinforcement learning tasks (like training opponent bots for the Rex Nemorensis game).",
  },
  {
    id: 7,
    title: "IPFS Ecosystem",
    image: {
      small: "/images/ipfs-ecosystem-small.webp",
      medium: "/images/ipfs-ecosystem-medium.webp",
      large: "/images/ipfs-ecosystem-large.webp",
    },
    link: "https://pin.dgs-creative.com/nodeinfo",
    description:
      "An operating node on the decentralized 'Interplanetary File System (IPFS)', as well as an invitation-only personal file-pinning service and API to access the node.",
  },
  {
    id: 8,
    title: "Artist Portfolio",
    image: {
      small: "/images/artist-portfolio-small.webp",
      medium: "/images/artist-portfolio-medium.webp",
      large: "/images/artist-portfolio-large.webp",
    },
    link: "https://davidgailsmith.com",
    description:
      "A visually stunning portfolio showcasing an artist's work and creative journey.",
  },
  {
    id: 9,
    title: "Microservice / Custom API",
    image: {
      small: "/images/microservice-small.webp",
      medium: "/images/microservice-medium.webp",
      large: "/images/microservice-large.webp",
    },
    link: "",
    description:
      "SOFIA (Samgov AI Opportunity Finding Agent) - A custom web-service with no front end, designed to research and report government contracting opportunities with filtering and AI analysis.",
  },
];

/**
 * Category definitions for filtering projects
 * Each category has an ID and display label
 */
const categories = [
  { id: "all", label: "All Projects" },
  { id: "3d", label: "3D Graphics" },
  { id: "blockchain", label: "Blockchain" },
  { id: "ai", label: "AI/ML" },
  { id: "web", label: "Web Development" },
  { id: "game", label: "Game Dev" },
];

/**
 * Assign categories to projects based on title keywords
 * This helps with project filtering functionality
 */
projects.forEach((project) => {
  if (!project.categories) {
    // Assign default categories based on title if not specified
    if (project.title.includes("3D") || project.title.includes("Graphics")) {
      project.categories = ["3d"];
    } else if (
      project.title.includes("Blockchain") ||
      project.title.includes("Smart Contract")
    ) {
      project.categories = ["blockchain"];
    } else if (
      project.title.includes("AI") ||
      project.title.includes("Machine Learning")
    ) {
      project.categories = ["ai"];
    } else if (project.title.includes("Game")) {
      project.categories = ["game"];
    } else {
      project.categories = ["web"];
    }
  }
});

/**
 * Portfolio component displays project cards with filtering options
 * Includes animations, image handling, and responsive layout
 */
function Portfolio() {
  // State for tracking visible projects and filter settings
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoaded, setIsLoaded] = useState(false);
  const projectRefs = useRef([]);

  /**
   * Updates filtered projects when category filter changes
   * @param {string} categoryId - Selected category to filter by
   */
  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);

    if (categoryId === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.categories && project.categories.includes(categoryId)
      );
      setFilteredProjects(filtered);
    }

    // Reset visibility for animation
    setVisibleProjects([]);
  };

  /**
   * Sets up intersection observer for fade-in animations
   * Tracks when projects come into viewport for staggered animations
   */
  useEffect(() => {
    // Make the fade-in more noticeable
    setTimeout(() => setIsLoaded(true), 400);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = Number(entry.target.dataset.projectId);
          setVisibleProjects((prev) => [...prev, projectId]);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Initialize refs array if needed
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);

    // Observe all project elements
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observer) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [filteredProjects]);

  /**
   * Tracks when project images have successfully loaded
   * @param {number} id - ID of the project with loaded image
   */
  const handleImageLoad = (id) => {
    // You could track loaded images here if needed
  };

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText transition-colors duration-300">
      <div className="container mx-auto fade-in">
        <h2 className="text-3xl font-semibold text-center mb-2">Portfolio</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Showcasing recent projects that demonstrate my expertise in advanced
          web development technologies
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 fade-in">
          <div
            className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-white dark:bg-gray-700 shadow-sm text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                }`}
                aria-current={activeFilter === category.id ? "page" : undefined}
                aria-pressed={activeFilter === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with enhanced transitions */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          {filteredProjects.map((project, i) => {
            const isVisible = visibleProjects.includes(project.id);
            const animationDelay = `${i * 120}ms`;

            return (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[i] = el)}
                data-project-id={project.id}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: isVisible ? animationDelay : "0ms" }}
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    aria-label={`View ${project.title} project details`}
                  >
                    {renderProjectCard(project, handleImageLoad)}
                  </a>
                ) : (
                  <div
                    className="block rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 h-full"
                    aria-labelledby={`project-title-${project.id}`}
                  >
                    {renderProjectCard(project, handleImageLoad)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Renders individual project card with consistent formatting
 * @param {Object} project - Project data object
 * @param {Function} onImageLoad - Callback for image load events
 * @returns {JSX.Element} Project card JSX
 */
function renderProjectCard(project, onImageLoad) {
  // Check if the project has valid image paths
  const hasValidImage = project.image && project.image.small;
  const placeholderPath = "/images/placeholder.webp";

  return (
    <>
      <div className="relative overflow-hidden group-hover:shadow-md">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
          {/* Image wrapper with proper aspect ratio container */}
          <picture className="block w-full h-full">
            <source
              srcSet={hasValidImage ? project.image.large : placeholderPath}
              media="(min-width: 1024px)"
              type="image/webp"
            />
            <source
              srcSet={hasValidImage ? project.image.medium : placeholderPath}
              media="(min-width: 640px)"
              type="image/webp"
            />
            <img
              src={hasValidImage ? project.image.small : placeholderPath}
              alt={`Preview of ${project.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onLoad={() => onImageLoad(project.id)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderPath;
              }}
            />
          </picture>

          {/* Hover overlay with subtle animation */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            {project.link && (
              <span className="text-white bg-gray-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Project
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3
          id={`project-title-${project.id}`}
          className="text-lg font-semibold group-hover:text-primary transition-colors duration-300"
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {/* Project categories tags */}
        {project.categories && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Portfolio;
