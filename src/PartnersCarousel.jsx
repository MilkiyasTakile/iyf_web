import React, { useEffect, useRef } from "react";
import "./Partners.css";
import Partners1 from "./assets/Partners1.png";
import Partners2 from "./assets/Partners2.png";
import Partners3 from "./assets/Partners3.png";
import Partners4 from "./assets/Partners4.png";

const partners = [
  { id: 1, src: Partners1, alt: "Partner 1" },
  { id: 2, src: Partners2, alt: "Partner 2" },
  { id: 3, src: Partners3, alt: "Partner 3" },
  { id: 4, src: Partners4, alt: "Partner 4" },
];

const PartnersCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 10; // Auto-scroll effect
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-6 md:py-8 overflow-hidden flex flex-col md:flex-row items-center space-y-6 md:space-x-8 rounded-xl mx-4 md:mx-10">
      <div className="text-center md:text-left w-full md:w-auto">
        <h1 className="text-gray-900 text-2xl md:text-3xl font-bold ml-10">Our Partners</h1>
      </div>

      <div className="slider flex space-x-4 md:space-x-8 overflow-x-auto md:overflow-hidden w-full md:w-auto" ref={sliderRef}>
        {partners.map((partner) => (
          <img key={partner.id} src={partner.src} alt={partner.alt} className="h-12 md:h-16 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
