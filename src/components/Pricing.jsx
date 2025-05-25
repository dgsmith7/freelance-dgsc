import React from "react";

const pricingOptions = [
  {
    id: 1,
    title: "Starter",
    price: "$300",
    description: "A single-page website (e.g., landing page).",
    features: ["Responsive design", "Basic SEO", "Email support"],
  },
  {
    id: 2,
    title: "Basic",
    price: "$500",
    description: "A simple, clean website with up to 3 pages.",
    features: ["Responsive design", "Basic SEO", "Email support"],
  },
  {
    id: 3,
    title: "Standard",
    price: "$1,000",
    description: "A fully-featured website with up to 7 pages.",
    features: [
      "Responsive design",
      "Advanced SEO",
      "Contact form",
      "Email support",
    ],
  },
  {
    id: 4,
    title: "Premium",
    price: "$2,000+",
    description: "A bespoke web application tailored to your needs.",
    features: ["Custom design", "Advanced features", "Priority support"],
  },
  {
    id: 5,
    title: "Enterprise",
    price: "$5,000+",
    description: "Large-scale projects for businesses.",
    features: ["Custom design", "Scalable architecture", "Dedicated support"],
  },
];

function Pricing() {
  return (
    <section className="p-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <h2 className="text-2xl font-bold text-center mb-6">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
            <p className="text-lg font-bold mb-4">{option.price}</p>
            <p className="mb-4">{option.description}</p>
            <ul className="mb-4">
              {option.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-sm">
        Custom pricing available for unique projects. Contact me for details.
      </p>
    </section>
  );
}

export default Pricing;
