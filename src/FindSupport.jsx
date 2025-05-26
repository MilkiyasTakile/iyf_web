import success from "./assets/success.png";
function  FindSupport() {
    return (
<div class="grid grid-cols-1 md:grid-cols-2 gap-5 m-20 mx-auto ml-20 mr-20">

  <div class="p-6 rounded-4xl shadow-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-2 text-lg m-3">
          <h2 className="font-bold text-xl">IYF</h2>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Therapists</a>
          <a href="#" className="hover:text-gray-400">Resources</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex flex-col space-y-2 text-lg m-3">
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">YouTube</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
        <div className="flex flex-col space-y-2 text-lg m-3">
          <a href="#" className="hover:text-gray-400">Terms of Use</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>  
     </div>
     <footer className="text-blue-950 p-4">
      <p>© {new Date().getFullYear()} IYF. All rights reserved.</p>
    </footer>
  </div>
<div className="bg-blue-950 p-6 rounded-4xl shadow-md flex flex-col">
    <div className="flex items-center space-x-4">
        <h4 className="text-3xl md:text-4xl font-bold text-white">
            Find Support, Guidance, and Balance
        </h4>  
        <img src={success} alt="logo" className="w-16 md:w-24 lg:w-30 hover:scale-105 transition-transform"/>
    </div>
    <div className="mt-auto text-center">
        <button className="bg-white hover:bg-sky-700 text-blue-950 font-bold text-lg md:text-xl py-3 px-6 rounded-4xl cursor-pointer">
            Find Support now
        </button>
    </div>
</div>


</div>
    );
}
export default  FindSupport;


