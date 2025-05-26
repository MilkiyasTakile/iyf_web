import { useState } from "react";
import logo from "./assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-center items-center text-blue-950 py-6 px-8 md:px-32 bg-white drop-shadow-md relative">
    
        <ul className="hidden justify-between xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">About</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Programs</li>
          <a href="#" className="mx-auto">
           <a href="#" className="flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full hover:scale-105 transition-all" />
        </a>
        </a>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Events</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">GetInvolved</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
        </ul>
        <i className="bx bx-menu xl:invisible block text-5xl cursor-pointer absolute left-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        {/* Mobile Menu */}
        <div className={`absolute xl:invisible top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300 ${isMenuOpen ? "h-auto" : "h-0 overflow-hidden"}`}>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">About</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Programs</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Events</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Get Involved</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</li>
        </div>
      </header>

      {/* Spacer that grows dynamically */}
      <div className={`transition-all duration-300 ${isMenuOpen ? "h-64" : "h-0"}`}></div>

      {/* Main Content */}
      <main className={`transition-all duration-300 p-6 ${isMenuOpen ? "mt-64" : "mt-0"}`}>
        
      </main>
    </>
  );
}

export default Navbar;
