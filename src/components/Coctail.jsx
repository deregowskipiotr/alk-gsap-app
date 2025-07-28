{/* import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import your existing cocktailsData array
import { cocktailsData } from "../constants/cocktailsData.js";

const CocktailsNew = () => {
  const [selectedId, setSelectedId] = useState(null);

  useGSAP(() => {
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
  });

  const selectedData = cocktailsData.find((c) => c.id === selectedId);

  // Click handler to update selected drink and scroll smoothly
  const handleClick = (id) => {
    setSelectedId(id);
    const el = document.getElementById("cocktail-details");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul
            className="
              grid 
              grid-cols-1 
              gap-4
              lg:grid-cols-3 
              lg:grid-rows-4
            "
          >
            {cocktailsData.map(({ id, name }) => (
              <li key={id}>
                <a
                  href="#cocktail-details"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(id);
                  }}
                  className="block px-4 py-3 rounded-lg text-center bg-white/10 hover:bg-[#e99b63]/60 transition-colors duration-200 font-semibold tracking-wide"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedData && (
        <div
          id="cocktail-details"
          className="mt-16 max-w-3xl mx-auto p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg text-white shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-4">{selectedData.name}</h2>
          <img
            src={selectedData.imgPath}
            alt={selectedData.name}
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="mb-6 italic">{selectedData.shortDescription}</p>
          <h3 className="text-2xl font-semibold mb-3">Recipe:</h3>
          <ul className="list-disc list-inside space-y-1">
            {selectedData.recipe.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CocktailsNew; */}
