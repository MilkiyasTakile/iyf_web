import leadershipc from "./assets/leadershipc.png";
function  card() {
    return (
<div class="grid grid-cols-1 md:grid-cols-2 gap-5 m-20 mx-auto ml-20 mr-20">

  <div class="p-6  shadow-md">
      <h3 className="text-blue-950 m-10"> HOW IT WORKS</h3>
    <h4 class="text-4xl font-bold text-blue-950 m-10">At the International Youth Foundation (IYF), we believe in empowering young people to shape a brighter future.</h4>
    <p class="text-blue-950 text-justify text-2xl m-5">We empower young individuals to thrive, innovate, and lead. Join us in shaping tomorrow’s leaders!</p>
  <div className="text-center">
  <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
    Join Us
  </button>
  </div>
  </div>
  <div className="bg-blue-950 p-6 rounded-4xl shadow-md">
    <img 
        src={leadershipc} 
        alt="logo" 
        className="lg:w-full hover:scale-105 transition-transform duration-300 ease-in-out"
    />
</div>

</div>
    );
}
export default  card;


