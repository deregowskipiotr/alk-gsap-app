import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card = ({ cocktail, onClose }) => {
  const cardRef = useRef(null);
  const backdropRef = useRef(null);

  // Animate backdrop and modal in when mounted
  useEffect(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 0.7, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // Animate out before unmount (close)
  const handleClose = () => {
    // Animate both backdrop and card out
    gsap.to(cardRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: onClose,
        });
      },
    });
  };

  if (!cocktail) return null;

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black z-40"
        style={{ opacity: 0.7, pointerEvents: "auto" }}
        aria-hidden="true"
      />
      {/* Modal Card */}
      <div
        ref={cardRef}
        className="fixed inset-0 flex justify-center items-center z-50 "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="relative max-w-3xl w-full lg:h-[650px] h-[550px] mx-4 p-6 bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/80 backdrop-blur-md bg-clip-padding rounded-lg text-white/90 shadow-lg shadow-yellow/30 font-serif">
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-white hover:text-yellow text-3xl font-bold cursor-pointer"
          >
            &times;
          </button>
          <h2 id="modal-title" className="text-xl md:text-4xl font-bold mb-4">
            {cocktail.name}
          </h2>
          <img
            src={cocktail.imgPath}
            alt={cocktail.name + "bottle"}
            className="pointer-events-none select-none absolute z-10 inset-0 mx-auto my-auto object-contain w-[45%] h-[75%] md:w-[60%] md:h-[90%] opacity-40"
            style={{
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
            }}
            aria-hidden="true"
            draggable="false"
          />
          <p className="mb-6 italic">{cocktail.shortDescription}</p>
          <h3 className="text-xlmd:text-2xl font-semibold mb-3">Recipe:</h3>
          <ul className="list-disc list-inside space-y-1 max-h-96 overflow-y-auto">
            {cocktail.recipe.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
            <p className="mt-10 italic hidden md:block">{cocktail.instruction}</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
