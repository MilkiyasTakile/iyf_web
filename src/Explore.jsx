function Explore() {
  return (
    <div className="m-0 p-0">
      {/* Header Section */}
      <div className="text-center px-4 max-w-screen-md mx-auto mt-10 md:mt-20">
        <h6 className="text-blue-950 text-lg md:text-xl font-semibold">EXPLORE & LEARN</h6>
        <h4 className="text-2xl md:text-4xl font-bold text-blue-950">
          Empowering Young Minds for a Thriving Future
        </h4>
        <p className="text-lg md:text-2xl text-blue-950 mt-4">
          Discover valuable insights, skill-building resources, and expert guidance designed to support your personal growth and leadership journey.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-6 md:p-20">
        {/* Growth & Resilience */}
        <div className="p-6 rounded-xl shadow-md bg-white text-center">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Growth & Resilience</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Quick insights on leadership, mindfulness, and emotional strength for young leaders.
          </p>
          <div className="text-center">
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Explore
            </button>
          </div>
        </div>

        {/* Success Mindset */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Success Mindset</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Practical strategies to stay focused, balanced, and emotionally strong.
          </p>
          <div className="text-center mt-10">
            <button className="bg-red-400 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Explore
            </button>
          </div>
        </div>

        {/* Unlock Your Potential */}
        <div className="p-6 rounded-xl shadow-md text-center bg-white">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Unlock Your Potential</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Tips on staying motivated, mindful, and mentally strong as a young leader.
          </p>
          <div className="text-center">
            <button className="bg-green-400 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
