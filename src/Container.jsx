import l1 from "./assets/l1.png";
import l2 from "./assets/l2.png";
import leadershipc1 from"./assets/leadershipc1.png";
function Container() {
    return (
        <div className="relative container mx-auto max-w-screen-lg p-6 md:p-12 lg:p-25 bg-gradient-to-r from-blue-400 to-emerald-400 text-center rounded-4xl">
            <img src={l1} alt="logo" className="absolute top-10 left-0 w-16 md:w-24 lg:w-30 hover:scale-105 transition-all"/>  
            <img src={leadershipc1} alt="logo" className="absolute top-10 right-0 w-16 md:w-24 lg:w-30 hover:scale-105 transition-all"/> 
            <h2 className="font-serif text-3xl md:text-5xl text-shadow-blue-950 mt-5 mx-5">
                Shaping Tomorrow’s Leaders, Today
            </h2>
            <p className="m-7 mx-8 text-lg md:text-2xl text-white">
                The International Youth Foundation (IYF) is committed to equipping young people with the skills, resources, and opportunities needed to thrive in a rapidly changing world.
            </p>
            <img src={l2} alt="logo" className="absolute bottom-5 left-0 w-16 md:w-24 lg:w-30 hover:scale-105 transition-all"/>
            <img src={l2} alt="logo" className="absolute bottom-5 right-0 w-16 md:w-24 lg:w-30 hover:scale-105 transition-all"/>
            <button className="bg-blue-950 mt-5 hover:bg-sky-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
                Get Started
            </button>
        </div>
    );
}

export default Container;
