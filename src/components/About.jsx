import React from "react";

function About() {
  return (
    <section className="p-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <h2 className="text-2xl font-bold text-center mb-6">About Me</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          I hold a Bachelor of Fine Arts in Studio Art, a Bachelor of Arts in
          Creative Computation, and a Master of Software Engineering from
          Southern Methodist University. With over two decades of military
          leadership experience as an aviator in the US Coast Guard and US Army,
          I bring a unique perspective to bespoke web development.
        </p>
        <p className="mb-4">
          My expertise spans computer graphics, blockchain, artificial
          intelligence, machine learning, and more. I specialize in creating
          custom websites, web apps, and services that others cannot replicate.
        </p>
        <div className="mt-6">
          <img
            src="/placeholder-veteran-emblem.png"
            alt="Veteran-Owned Business Emblem"
            className="mx-auto w-32 h-32"
          />
          <p className="mt-2 text-sm">Proudly a veteran-owned business</p>
        </div>
      </div>
    </section>
  );
}

export default About;
