import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import CharacterSection from "./components/CharacterSection";
import Footer from "./components/Footer";

import walter from "../public/pics/WW.png";
import jesse from "../public/pics/JP.png";
import gus from "../public/pics/GF.png";
import saul from "../public/pics/SG.png";

function App() {
  const [currentSection, setCurrentSection] = useState("overview");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    function handleScroll() {
      const viewportCenter = window.innerHeight / 2;
      let closest = { id: null, distance: Infinity };

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closest.distance) closest = { id: section.id, distance };
      });

      if (closest.id) setCurrentSection(closest.id);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const characters = [
    {
      id: "walter",
      name: "Walter White",
      image: walter,
      description:
        "Once a mild-mannered chemistry teacher, Walter White becomes the feared drug lord 'Heisenberg.' His transformation from desperate man to ruthless mastermind makes him one of TV’s most complex characters — a man consumed by pride and power.",
    },
    {
      id: "jesse",
      name: "Jesse Pinkman",
      image: jesse,
      description:
        "A small-time meth cook and former student of Walter White. Despite his reckless nature, Jesse’s heart and guilt make him one of the most human and tragic figures in the story, struggling between loyalty and morality.",
    },
    {
      id: "gus",
      name: "Gus Fring",
      image: gus,
      description:
        "The calm, calculating owner of Los Pollos Hermanos — and one of the most dangerous drug lords in the Southwest. His disciplined approach and quiet menace make him a perfect foil to Walter White.",
    },
    {
      id: "saul",
      name: "Saul Goodman",
      image: saul,
      description:
        "The smooth-talking, morally flexible lawyer who represents criminals and thrives in chaos. Saul Goodman’s charm and resourcefulness add humor and depth — and eventually, his own acclaimed spin-off series.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar currentSection={currentSection} />
      <Hero />
      <Overview />
      {characters.map((char, index) => {
        const isEven = index % 2 === 0;
        const bg = isEven
          ? "bg-gray-50 dark:bg-gray-800"
          : "bg-white dark:bg-gray-900";

        return (
          <CharacterSection key={char.id} {...char} bg={bg} reverse={!isEven} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
