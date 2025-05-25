import React from "react";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";

// Main application component
function App() {
  return (
    <div className="min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      {/* Header with site title and theme toggle */}
      <header
        className="p-4 text-center bg-lightBackground dark:bg-darkBackground"
        role="banner"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">DGS Creative LLC</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content area */}
      <main id="main-content" className="p-4" role="main">
        {/* Hero Section */}
        <section className="p-8 text-center bg-lightBackground dark:bg-darkBackground">
          <h2 className="text-4xl font-bold mb-4">
            Showcasing bespoke web development skills
          </h2>
          <p className="text-lg">
            My expertise spans computer graphics, blockchain, artificial
            intelligence, machine learning, and more. I specialize in creating
            custom websites, web apps, and services that others cannot
            replicate.
          </p>
        </section>

        {/* Portfolio Section */}
        <section className="bg-lightBackground dark:bg-darkBackground">
          <Portfolio />
        </section>

        {/* Advanced Skills Section */}
        <section className="bg-lightBackground dark:bg-darkBackground">
          <Skills />
        </section>

        {/* Pricing Section */}
        <section className="bg-lightBackground dark:bg-darkBackground">
          <Pricing />
        </section>

        {/* About Section */}
        <section className="bg-lightBackground dark:bg-darkBackground">
          <About />
        </section>

        {/* Contact Section */}
        <section className="bg-lightBackground dark:bg-darkBackground">
          <Contact />
        </section>
      </main>

      {/* Footer with copyright information */}
      <footer
        className="p-4 text-center text-secondary bg-lightBackground dark:bg-darkBackground"
        role="contentinfo"
      >
        <p>&copy; 2023 DGS Creative LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
