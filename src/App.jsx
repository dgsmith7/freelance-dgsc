import React, { useState, useEffect } from "react";
// Replace react-helmet with react-helmet-async
import { HelmetProvider, Helmet } from "react-helmet-async";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import TechStack from "./components/TechStack";
import Hero from "./components/sections/Hero";

/**
 * Main application component
 * Handles layout, navigation, and section management
 */
function App() {
  // State for tracking active section and scroll position
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Sets up scroll event listener to update header styling
   * based on page scroll position
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Scrolls page to the selected section with smooth animation
   * @param {string} sectionId - ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Wrap the app with HelmetProvider
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* SEO metadata for search engine optimization and social sharing */}
        <Helmet>
          <title>
            DGS Creative LLC | Bespoke Web Development & Digital Solutions
          </title>
          <meta
            name="description"
            content="Specialized web development services featuring 3D graphics, blockchain, AI/ML, microservices, and other custom solutions. Expert developer with a creative approach to technical challenges."
          />
          <meta
            name="keywords"
            content="web development, 3D graphics, blockchain, AI, machine learning, custom web apps, smart contracts"
          />
          <meta
            property="og:title"
            content="DGS Creative LLC | Bespoke Web Development"
          />
          <meta
            property="og:description"
            content="Specialized web development featuring 3D graphics, blockchain, and AI/ML solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dgscreative.com" />
          <meta
            property="og:image"
            content="https://dgscreative.com/og-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://dgscreative.com" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "DGS Creative LLC",
                "description": "Specialized web development services featuring 3D graphics, blockchain, AI/ML, and custom solutions.",
                "image": "https://dgscreative.com/logo.png",
                "url": "https://dgscreative.com",
                "telephone": "+1-800-555-0000",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Your City",
                  "addressRegion": "Your State",
                  "postalCode": "12345",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
                "priceRange": "$$$"
              }
            `}
          </script>
        </Helmet>

        {/* Accessibility: Skip navigation link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
        >
          Skip to main content
        </a>

        {/* Site header with navigation */}
        <header
          className={`sticky top-0 z-50 py-4 px-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 ${
            isScrolled
              ? "shadow-sm border-b border-gray-100 dark:border-gray-800"
              : ""
          }`}
          role="banner"
        >
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl tracking-tight font-semibold">
              <span className="text-primary">DGS</span> Creative
            </h1>

            {/* Navigation Menu - simplified, more space between items */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {[
                  "home",
                  "portfolio",
                  "tech-stack",
                  "skills",
                  "pricing",
                  "about",
                  "contact",
                ].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`py-1 text-sm tracking-wide transition-colors ${
                        activeSection === section
                          ? "text-primary font-medium"
                          : "text-lightTextSecondary dark:text-darkTextSecondary hover:text-primary"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {/* Mobile menu button - simplified */}
              <button className="md:hidden p-1 rounded-md text-lightTextSecondary dark:text-darkTextSecondary hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content wrapper with accessibility attributes */}
        <main
          id="main-content"
          tabIndex="-1"
          className="bg-white dark:bg-gray-900 outline-none"
          role="main"
        >
          {/* Hero Section */}
          <Hero scrollToSection={scrollToSection} />

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <Portfolio />
          </section>

          {/* Tech Stack Section - new section */}
          <section
            id="tech-stack"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <TechStack />
          </section>

          {/* Advanced Skills Section */}
          <section
            id="skills"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <Skills />
          </section>

          {/* Pricing Section */}
          <section
            id="pricing"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <Pricing />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <About />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="bg-lightBackground dark:bg-darkBackground"
          >
            <Contact />
          </section>
        </main>

        {/* Site footer with copyright and social links */}
        <footer
          className="py-8 px-8 text-center bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
          role="contentinfo"
        >
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} DGS Creative LLC. All rights
              reserved.
            </p>

            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
