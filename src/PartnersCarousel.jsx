import React from "react";
import "./Partners.css"; // Ensure this file has the CSS animation styles
 // The non-moving logo
import Partners1 from "./assets/Partners1.png";
import Partners2 from "./assets/Partners2.png";
import Partners3 from "./assets/Partners3.png";
import Partners4 from "./assets/Partners4.png";

const partners = [
  { id: 1, src: Partners1, alt: "Partner 1" },
  { id: 2, src: Partners2, alt: "Partner 2" },
  { id: 3, src: Partners3, alt: "Partner 3"}, // Increased size
  { id: 4, src: Partners4, alt: "Partner 4"}, // Increased size
];

const PartnersCarousel = () => {
  return (
    <div className="bg-white py-8 overflow-hidden flex items-center space-x-8 rounded-4xl ml-10 mr-10">
      {/* Static section with "Our Partners" */}
      <div className="text-center lg:text-left">
        <h1 className="text-gray-900 text-3xl font-bold ml-15">Our Partners</h1>
      </div>

      {/* Moving partner logos */}
      <div className="slider flex space-x-8">
        {partners.map((partner) => (
          <img key={partner.id} src={partner.src} alt={partner.alt} className={`h-16 ${partner.size || ""}`} />
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
