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
              <ul className="space-y-2 mb-6">
                <li>
                  7+ years of undergraduate and graduate teaching experience in
                  the domain of code development and generative art (
                  <a
                    href="https://www.smu.edu/meadows/areasofstudy/creativecomputation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary dark:text-accent-primary hover:underline"
                  >
                    Creative Computation
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.smu.edu/meadows/areasofstudy/creativetechnology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary dark:text-accent-primary hover:underline"
                  >
                    Creative Technology
                  </a>
                  ).
                </li>
                <li>
                  20+ years of active military service as aviator in US Coast
                  Guard and US Army - leadership, project management, strategic
                  planning, and team coordination are hallmarks of my practice.
                </li>
                <li>
                  I have the knowledge and soft skills to get you the results
                  you are looking for.
                </li>
              </ul>
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

            <div className="mb-4 text-sm text-center text-lightTextSecondary dark:text-darkTextSecondary">
              Leveraging military precision and discipline in the delivery of
              software solutions
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 w-full max-w-sm">
              <h4 className="text-center font-medium mb-2">
                Sam.gov registered
              </h4>
              <ul className="text-sm text-lightTextSecondary dark:text-darkTextSecondary space-y-1">
                <li>Entity ID: UHXKFGZ8UR53</li>
                <li>CAGE Code: 9HV14</li>
                <li className="pt-1 border-t border-gray-200 dark:border-gray-700 mt-2">
                  <span className="font-medium">NAICS Codes:</span>
                  <ul className="pl-3 mt-1 space-y-1">
                    <li>541511 - Custom Computer Programming Services</li>
                    <li>541519 - Other Computer Related Services</li>
                    <li>
                      711510 - Independent Artists, Writers, and Performers
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
