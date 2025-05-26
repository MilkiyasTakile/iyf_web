import leadershipc from "./assets/successful.png";
function  SERVICES() {
    return (
        <div className="m-0 p-0">
            <div className="text-center px-4 max-w-screen-md mx-auto mt-40">
              <h6 className="text-blue-950 text-lg font-semibold">SERVICES</h6>
              <h4 className="text-3xl md:text-4xl font-bold text-blue-950">
                IYF empowers youth with skills for growth, leadership, and success
              </h4>
              <p className="text-lg md:text-2xl text-blue-950 mt-4">
                Equips young people with essential skills through dynamic programs that inspire growth, leadership, and achievement.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 m-30 mx-auto mr-20 ml-20">
              <div class="p-6 rounded-4xl shadow-md bg-gradient-to-r from-blue-400 to-emerald-400 text-center">
                <h4 class="text-4xl font-bold text-blue-950">Leadership Development</h4>
                <p class="text-blue-950 mt-6 text-justify text-2xl">Training programs designed to empower future leaders.</p>
                <div className="text-center">
                <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                  Learn more
                </button>
                </div>
              </div>
              <div class="bg-white p-6 rounded-4xl shadow-md">
                  <h4 class="text-4xl font-bold text-blue-950">Skill Building Workshops</h4>
                  <p class="text-blue-950 mt-6 text-justify text-2xl">Hands-on sessions to enhance professional and personal skills.</p>
                  <div className="text-center">
                      <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                          Learn more
                      </button>
                  </div>
              </div>
              <div class="p-6 rounded-4xl shadow-md text-center mt-5 bg-white">
                  <h4 class="text-4xl font-bold text-blue-950">Mentorship & Career Guidance</h4>
                  <p class="text-blue-950 mt-6 text-justify text-2xl">Participants have access to experienced mentors who provide guidance on career planning, goal setting, and professional development. Our mentorship programs connect young people with industry leaders to inspire and equip them for success.</p>
                  <div className="text-center">
                      <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                          Learn more
                      </button>
                    </div>
              </div>
               <div class="p-6 rounded-4xl shadow-md mt-5">
                      <img src={leadershipc} alt="logo" className="lg:w-100 hover:scale-105 transition-all "/>
              </div>
            </div>
        </div>
    );
}
export default  SERVICES;


