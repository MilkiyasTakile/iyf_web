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
  {
  text: "IYF’s programs have transformed my perspective on leadership and personal growth. The guidance and mentorship I received helped me navigate my career path with confidence.",
  name: "Michael B.",
  age: "26 years old",
},
{
  text: "The networking opportunities at IYF opened doors I never thought possible. I've connected with inspiring individuals who have encouraged me to reach my full potential.",
  name: "Sophia N.",
  age: "20 years old",
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
    <div className="bg-white p-8 mt-0 m-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="mb-5 text-lg font-semibold">TESTIMONIALS</h3>
          <h1 className="text-gray-900 text-4xl font-bold">
            What Our Participants Are Saying
          </h1>
          <p className="text-gray-700 mt-4 text-xl">
            Empowering young leaders through mentorship, training, and skill-building for a successful future.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <button onClick={prevTestimonial} className="bg-white border border-gray-300 rounded-full p-2 hover:bg-sky-700 cursor-pointer">
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextTestimonial} className="bg-white border border-gray-300 rounded-full p-2 hover:bg-sky-700 cursor-pointer">
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:flex-row lg:w-2/3 mt-8 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-6">
          {/* On large screens, show two testimonials */}
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
            <div key={index} className={`p-4 rounded-3xl shadow-md ${index % 2 === 0 ? "bg-gradient-to-r from-blue-400 to-emerald-400" : "bg-blue-950 text-white"} lg:w-1/2`}>
              <p className="text-2xl">{testimonial.text}</p>
              <p className="text-sm mt-2 m-5">— {testimonial.name}, {testimonial.age}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
