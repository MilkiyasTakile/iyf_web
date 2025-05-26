import community from "./assets/community.jpg";
function  Community() {
    return (
<div class="grid grid-cols-1 md:grid-cols-2 gap-5 m-20 mx-auto ml-20 mr-20">

  <div class="p-6 rounded-4xl shadow-md bg-gray-100">
      <h3 className="text-blue-950 m-10">COMMUNITY</h3>
    <h4 class="text-4xl font-bold text-blue-950 m-10">Community & Connection</h4>
    <p class="text-blue-950 text-justify text-2xl m-10">Join a network of young leaders, explore mentorship opportunities, share success stories, engage in discussions, and participate in events that foster growth and collaboration.</p>
  <div className="text-center">
  <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
     Join the Community
  </button>
  </div>
  </div>
  <div class="p-6 rounded-4xl shadow-md bg-white">
    <img src={community} alt="logo" className="lg:w-100 hover:scale-105 transition-all "/>
  </div>
</div>
    );
}
export default  Community;


