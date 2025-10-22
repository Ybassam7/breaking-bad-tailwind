import React from "react";

function Overview() {
  return (
    <section
      id="overview"
      className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        Series Overview
      </h2>
      <p className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-center ">
        “Breaking Bad” follows Walter White, a high school chemistry teacher
        diagnosed with cancer, who turns to producing methamphetamine with his
        former student Jesse Pinkman. As Walter descends deeper into the
        criminal underworld, his choices lead to moral decay, personal loss, and
        a legacy that forever changes everyone around him.
      </p>
    </section>
  );
}

export default Overview;
