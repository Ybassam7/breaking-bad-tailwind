import React from "react";

function CharacterSection({ id, name, image, bg, reverse, description }) {
  const layout = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section id={id} className={`py-24 px-6 md:px-0 ${bg}`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col ${layout} items-center gap-10 px-6 md:px-20`}
      >
        <img
          src={image}
          alt={name}
          className="w-5/6 md:w-1/3 h-auto rounded-2xl shadow-md object-cover"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-400 text-center md:text-left">
            {name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CharacterSection;
