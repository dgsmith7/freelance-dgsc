import React from "react";

function About() {
  const education = [
    {
      degree: "Master of Software Engineering",
      institution: "Southern Methodist University",
    },
    {
      degree: "Bachelor of Arts in Creative Computation",
      institution: "Southern Methodist University",
    },
    {
      degree: "Bachelor of Fine Arts in Studio Art",
      institution: "Southern Methodist University",
    },
  ];

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-center mb-8">About</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left column: Professional summary */}
          <div className="md:w-3/5">
            <p className="text-lightTextSecondary dark:text-darkTextSecondary mb-4">
              I combine technical expertise with creative vision to develop
              custom solutions that bridge the gap between design and
              functionality.
            </p>

            <p className="text-lightTextSecondary dark:text-darkTextSecondary mb-6">
              With a background spanning both fine arts and software
              engineering, I bring a unique perspective to digital projects,
              focusing on creating elegant solutions that serve real business
              needs and deliver exceptional user experiences.
            </p>

            <h3 className="text-xl font-medium mb-3">Education</h3>
            <ul className="space-y-2 mb-6">
              {education.map((item, index) => (
                <li
                  key={index}
                  className="text-lightTextSecondary dark:text-darkTextSecondary"
                >
                  {item.degree} — {item.institution}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-medium mb-3">Experience</h3>
            <p className="text-lightTextSecondary dark:text-darkTextSecondary mb-6">
              My professional background includes over twenty years of
              leadership experience as an aviator in the U.S. Coast Guard and
              U.S. Army, where I developed strong skills in project management,
              strategic planning, and team coordination.
            </p>
          </div>

          {/* Right column: VOB logo and certifications */}
          <div className="md:w-2/5 flex flex-col items-center">
            <div className="mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center w-full max-w-sm">
              <img
                src="/images/VOB-logo-transparent.png"
                alt="Veteran Owned Business"
                className="max-w-full h-auto max-h-40"
              />
            </div>

            <div className="text-sm text-center text-lightTextSecondary dark:text-darkTextSecondary">
              Leveraging military precision and discipline in the delivery of
              software solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
