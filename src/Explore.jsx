function Explore() {
    return(
<div className="m-0 p-0">
            <div className="text-center px-4 max-w-screen-md mx-auto mt-20">
              <h6 className="text-blue-950 text-lg font-semibold"> EXPLORE & LEARN</h6>
              <h4 className="text-3xl md:text-4xl font-bold text-blue-950">
                Empowering Young Minds for a Thriving Future
              </h4>
              <p className="text-lg md:text-2xl text-blue-950 mt-4">
                Discover valuable insights, skill-building resources, and expert guidance designed to support your personal growth and leadership journey.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 m-20 mx-auto mr-20 ml-20">
              <div class="p-6 rounded-4xl shadow-md bg-white text-center">
                <h4 class="text-4xl font-bold text-blue-950">Growth & Resilience</h4>
                <p class="text-blue-950 mt-6 text-justify text-2xl">Quick insights on leadership, mindfulness, and emotional strength for young leaders.</p>
                <div className="text-center">
                <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                   Explore
                </button>
                </div>
              </div>
              <div class="bg-white p-6 rounded-4xl shadow-md">
                  <h4 class="text-4xl font-bold text-blue-950">Success Mindset</h4>
                  <p class="text-blue-950 mt-6 text-justify text-2xl">Practical strategies to stay focused, balanced, and emotionally strong.</p>
                  <div className="text-center">
                      <button className="bg-red-300 mt-15 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                           Explore
                      </button>
                  </div>
              </div>
              <div class="p-6 rounded-4xl shadow-md text-center bg-white">
                <h4 class="text-4xl font-bold text-blue-950">Unlock Your Potential</h4>
                <p class="text-blue-950 mt-6 text-justify text-2xl">Tips on staying motivated, mindful, and mentally strong as a young leader.</p>
                  <div className="text-center">
                    <button className="bg-green-300 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                         Explore
                    </button>
                  </div>
              </div>
            </div>
  </div>
    );
}
export default Explore;