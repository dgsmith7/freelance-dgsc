import React, { useEffect, useState } from "react";

/**
 * ThemeToggle component handles switching between light and dark mode
 * Includes accessibility features and persists user preference
 */
function ThemeToggle() {
  // Track current theme state
  const [isDark, setIsDark] = useState(false);

  /**
   * Initialize theme based on user preference or system setting
   * Sets appropriate HTML class and localStorage value
   */
  useEffect(() => {
    // Check if user has a theme preference or system preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  // Set dark mode
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setIsDark(true);
  };

  // Set light mode
  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setIsDark(false);
  };

  /**
   * Toggle between light and dark themes
   * Updates HTML classes and persists preference
   */
  const toggleTheme = () => {
    if (isDark) {
      setLightMode();
    } else {
      setDarkMode();
    }

    // Log to help with debugging
    console.log("Theme toggled. Dark mode:", !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Icon changes based on current theme */}
      {isDark ? (
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
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
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
