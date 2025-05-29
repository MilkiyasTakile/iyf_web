import success from "./assets/success.png";

function FindSupport() {
    return (
        <div className="m-0 p-0">
            {/* Support Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-6 md:p-20">
                {/* Information Section */}
                <div className="p-6 rounded-xl shadow-md bg-white text-center md:text-left">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col space-y-2 text-lg">
                            <h2 className="font-bold text-xl">IYF</h2>
                            <a href="#" className="hover:text-gray-400">About</a>
                            <a href="#" className="hover:text-gray-400">Services</a>
                            <a href="#" className="hover:text-gray-400">Therapists</a>
                            <a href="#" className="hover:text-gray-400">Resources</a>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg">
                            <a href="#" className="hover:text-gray-400">Instagram</a>
                            <a href="#" className="hover:text-gray-400">Facebook</a>
                            <a href="#" className="hover:text-gray-400">YouTube</a>
                            <a href="#" className="hover:text-gray-400">LinkedIn</a>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg">
                            <a href="#" className="hover:text-gray-400">Terms of Use</a>
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        </div>  
                    </div>
                    <footer className="text-blue-950 p-4 mt-6">
                        <p>© {new Date().getFullYear()} IYF. All rights reserved.</p>
                    </footer>
                </div>

                {/* Support Call-to-Action Section */}
                <div className="bg-blue-950 p-6 rounded-xl shadow-md flex flex-col items-center">
                    <h4 className="text-2xl md:text-4xl font-bold text-white text-center">
                        Find Support, Guidance, and Balance
                    </h4>  
                    <img src={success} alt="Support" className="w-12 md:w-24 lg:w-30 hover:scale-105 transition-transform mt-4"/>
                    <div className="mt-6 text-center">
                        <button className="bg-white hover:bg-sky-700 text-blue-950 font-bold text-lg md:text-xl py-3 px-6 rounded-full cursor-pointer">
                            Find Support Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindSupport;
