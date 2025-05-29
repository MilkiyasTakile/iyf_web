import leadershipc from "./assets/successful.png";

function SERVICES() {
  return (
    <div className="m-0 p-0">
      {/* Header Section */}
      <div className="text-center px-4 max-w-screen-md mx-auto mt-10">
        <h6 className="text-blue-950 text-lg font-semibold">SERVICES</h6>
        <h4 className="text-2xl md:text-4xl font-bold text-blue-950">
          IYF empowers youth with skills for growth, leadership, and success
        </h4>
        <p className="text-lg md:text-2xl text-blue-950 mt-4">
          Equips young people with essential skills through dynamic programs that inspire growth, leadership, and achievement.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-6 md:p-20">
        {/* Leadership Development */}
        <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-blue-400 to-emerald-400 text-center">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Leadership Development</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Training programs designed to empower future leaders.
          </p>
          <div className="text-center">
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        {/* Skill Building Workshops */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Skill Building Workshops</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Hands-on sessions to enhance professional and personal skills.
          </p>
          <div className="text-center">
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        {/* Mentorship & Career Guidance */}
        <div className="p-6 rounded-xl shadow-md text-center mt-5 bg-white">
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Mentorship & Career Guidance</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Participants have access to experienced mentors who provide guidance on career planning, goal setting, and professional development.
          </p>
          <div className="text-center">
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="p-6 rounded-xl shadow-md mt-5 flex justify-center">
          <img src={leadershipc} alt="Leadership" className="w-full max-w-xs md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}

export default SERVICES;
