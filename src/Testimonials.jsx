import React, { useState } from "react";

const testimonials = [
  {
    text: "The leadership training at IYF gave me the confidence to take charge of my career. The mentorship program connected me with industry experts who guided me through my journey.",
    name: "Jane M.",
    age: "22 years old",
  },
  {
    text: "IYF’s skill-building workshops helped me develop practical skills that I now use in my job. The hands-on approach made learning engaging and effective!",
    name: "David K.",
    age: "19 years old",
  },
  {
    text: "Being part of IYF’s community engagement initiatives has been life-changing. I’ve built strong networks, gained valuable experience, and made a real impact in my community.",
    name: "Aisha T.",
    age: "25 years old",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
 <div class="bg-white p-8 m-10">
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    <div class="lg:w-1/3 text-center lg:text-left">
      <h3 className="mb-5"> TESTIMONIALS</h3>
      <h1 class="text-gray-900 text-4xl font-bold">What Our Participants Are Saying</h1>
        <p class="text-gray-700 mt-4 text-2xl">Empowering young leaders through mentorship, training, and skill-building for a successful future.</p>
      <div class="mt-4 flex justify-center lg:justify-start space-x-4">
        <button class="bg-white border border-gray-300 rounded-full p-2">
          <svg class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button class="bg-gray-800 rounded-full p-2">
          <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:w-2/3 mt-8 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-6">
      <div class="bg-gradient-to-r from-blue-400 to-emerald-400 p-4 rounded-3xl shadow-md lg:w-1/2">
        <p class="text-gray-800 text-2xl">"IYF's leadership training gave me the confidence to pursue my dreams. I’ve gained invaluable skills that have shaped my future."</p>
        <p class="text-gray-600 text-sm mt-2 m-5">— Kevin M., 23</p>
      </div>
      <div class="bg-blue-950 p-4 rounded-3xl shadow-md text-white lg:w-1/2">
        <p class="text-2xl m-5">"The mentorship program connected me with professionals who guided me toward my career path. I feel prepared to take on new challenges."</p>
        <p class="text-sm mt-2 m-5">— Sarah T., 21</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Testimonials;
