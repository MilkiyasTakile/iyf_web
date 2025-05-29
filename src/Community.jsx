import community from "./assets/community.jpg";

function Community() {
  return (
    <div className="m-0 p-0">
      {/* Community Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-6 md:p-20">
        {/* Text Section */}
        <div className="p-6 rounded-xl shadow-md bg-gray-100 text-center md:text-left">
          <h3 className="text-blue-950 text-lg md:text-xl font-semibold">COMMUNITY</h3>
          <h4 className="text-2xl md:text-4xl font-bold text-blue-950">Community & Connection</h4>
          <p className="text-blue-950 mt-4 text-lg md:text-2xl text-justify">
            Join a network of young leaders, explore mentorship opportunities, share success stories, engage in discussions, and participate in events that foster growth and collaboration.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
              Join the Community
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="p-6 rounded-xl shadow-md flex justify-center">
          <img src={community} alt="Community" className="w-full max-w-xs md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}

export default Community;
