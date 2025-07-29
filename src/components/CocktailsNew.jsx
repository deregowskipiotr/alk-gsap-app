import React, { useState } from "react";
//import { useGSAP } from "@gsap/react";
//import gsap from "gsap";

import { cocktailsData } from "../../constants";
import Card from "./Card";

const CocktailsNew = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedData = cocktailsData.find((c) => c.id === selectedId);

  /*useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  }); */

  //const selectedData = cocktailsData.find((c) => c.id === selectedId);

  const handleClick = (id) => {
    setSelectedId(id);
    const el = document.getElementById("cocktail-details");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cocktails" className="w-full overflow-hidden radial-gradient">
      {/* <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      /> */}

      <div className="popular mt-24 lg:mt-10">
        <h2 className="text-center font-modern-negra text-6xl text-yellow mx-5">
          Most popular cocktails:
        </h2>
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:grid-rows-4 mx-5 mt-30">
          {cocktailsData.map(({ id, name }) => (
            <li key={id}>
              <a
                href="#cocktail-details"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(id);
                }}
                className="block px-2 lg:py-4 py-5 h-[80px] lg:h-[60px] rounded-lg text-center bg-white/10 hover:bg-yellow/80 transition-colors duration-400 tracking-wide"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Use Card component to show selected cocktail */}
      <Card cocktail={selectedData} onClose={() => setSelectedId(null)} />
    </section>
  );
};

export default CocktailsNew;
