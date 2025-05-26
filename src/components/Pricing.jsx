import React from "react";

function Pricing() {
  const pricingTiers = [
    {
      name: "Standard",
      description: "For simple websites and basic applications",
      price: "$2,500",
      duration: "2-3 weeks",
      features: [
        "Responsive website or simple web app",
        "Up to 5 pages or screens",
        "Basic interactive elements",
        "Content management integration",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "30 days support",
      ],
      suggested: "Ideal for small businesses and personal projects",
      estimatedHours: "35-45 hours",
    },
    {
      name: "Professional",
      description: "For advanced websites and interactive applications",
      price: "$5,000",
      duration: "2-6 weeks",
      features: [
        "Dynamic web application",
        "Custom animations and interactions",
        "API integration",
        "User authentication system",
        "Dashboard or admin interface",
        "Performance optimization",
        "Comprehensive testing",
        "30 days support",
      ],
      suggested: "Perfect for established businesses and specialized needs",
      estimatedHours: "45-75 hours",
      highlight: true,
    },
    {
      name: "Premium",
      description: "For specialized technical projects",
      price: "$8,000+",
      duration: "8-12 weeks",
      features: [
        "Advanced 3D graphics or visualizations",
        "Custom WebGL or Three.js development",
        "Blockchain/smart contract integration",
        "AI/ML implementation",
        "Complex data processing",
        "Custom algorithm development",
        "Comprehensive documentation",
        "30 days support",
      ],
      suggested: "Ideal for technical innovations and specialized applications",
      estimatedHours: "125+ hours",
    },
  ];

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-3">Pricing</h2>
        <p className="text-center text-lightTextSecondary dark:text-darkTextSecondary mb-10 max-w-2xl mx-auto">
          Transparent pricing options designed to deliver excellent value for
          your investment
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden border ${
                tier.highlight
                  ? "border-primary shadow-md dark:border-primary/50"
                  : "border-gray-200 dark:border-gray-700"
              } transition-all hover:shadow-lg bg-white dark:bg-gray-800 relative`}
            >
              {tier.highlight && (
                <div className="absolute top-0 w-full text-center py-1 bg-primary text-white text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${tier.highlight ? "pt-8" : ""}`}>
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-sm text-lightTextSecondary dark:text-darkTextSecondary mb-4">
                  {tier.description}
                </p>

                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-lightTextSecondary dark:text-darkTextSecondary ml-1 text-sm">
                    starting price
                  </span>
                </div>

                <p className="text-sm mb-4">
                  <span className="font-medium">Typical Duration:</span>{" "}
                  {tier.duration}
                </p>

                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex text-sm">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lightTextSecondary dark:text-darkTextSecondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-lightTextSecondary dark:text-darkTextSecondary italic mb-4">
                  {tier.suggested}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="#contact"
                    className={`block text-center py-2 px-4 rounded ${
                      tier.highlight
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    } transition-colors`}
                  >
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-medium mb-3">Custom Project?</h3>
          <p className="text-lightTextSecondary dark:text-darkTextSecondary mb-6">
            Every project is unique. If your needs don't fit into these
            packages, I'd be happy to provide a custom quote based on your
            specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-block py-2 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
