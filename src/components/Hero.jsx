import React from "react";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-200 to-white dark:from-green-800 dark:to-gray-800 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Breaking Bad
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        A chemistry teacher turned meth kingpin. A story of transformation,
        power, and consequence.
      </p>
      <a
        href="#overview"
        className="bg-green-700 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition"
      >
        Discover the Story
      </a>
    </section>
  );
}

export default Hero;
