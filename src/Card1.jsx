import leadershipc from "./assets/leadershipc.png";

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto p-6 md:p-20">
      
      {/* Text Section */}
      <div className="p-6 shadow-md">
        <h3 className="text-blue-950 text-lg md:text-xl font-semibold mb-4">HOW IT WORKS</h3>
        <h4 className="text-2xl md:text-4xl font-bold text-blue-950 mb-6">
          At the International Youth Foundation (IYF), we believe in empowering young people to shape a brighter future.
        </h4>
        <p className="text-blue-950 text-lg md:text-2xl text-justify mb-6">
          We empower young individuals to thrive, innovate, and lead. Join us in shaping tomorrow’s leaders!
        </p>
        <div className="text-center">
          <button className="bg-blue-950 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
            Join Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-blue-950 p-6 rounded-xl shadow-md flex justify-center">
        <img 
          src={leadershipc} 
          alt="Leadership" 
          className="w-full max-w-xs md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

    </div>
  );
}

export default Card;
