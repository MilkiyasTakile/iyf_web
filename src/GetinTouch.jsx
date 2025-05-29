import { useState } from "react";  
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";  

function GetInTouch() {  
    const [email, setEmail] = useState("");  
    const [message, setMessage] = useState("");  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        alert("Message sent successfully!");  
    };

    return (  
        <div className="px-4 max-w-screen-lg mx-auto mt-10">  
            {/* Header Section */}
            <div className="text-center mb-10">  
                <h6 className="text-blue-950 text-lg md:text-xl font-semibold">Get in Touch</h6>  
                <h4 className="text-2xl md:text-4xl font-bold text-blue-950">
                    We’re Here to Support You
                </h4>  
                <p className="text-lg md:text-2xl text-blue-950 mt-4">
                    Whether you have questions, need help getting started, or want to learn more—reach out anytime.
                </p>  
            </div>

            {/* Contact & Form Container */}
            <div className="flex flex-col md:flex-row gap-6">  
                {/* First Column - Contact Details */}
                <div className="p-6 rounded-xl shadow-md w-full md:w-1/2 bg-white text-center md:text-left">  
                    <h5 className="text-xl font-semibold text-blue-950">Contact Details</h5>  
                    <p className="text-lg text-blue-950 mt-4">📧 Email: info@iyf.org</p>  
                    <p className="text-lg text-blue-950">📞 Phone: +254 700 123 456</p>  
                    <p className="text-lg text-blue-950">📍 Address: Nairobi, Kenya</p>  

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start mt-6 space-x-4 text-blue-950 text-3xl">  
                        <FaLinkedin className="cursor-pointer hover:text-blue-600"/>  
                        <FaFacebook className="cursor-pointer hover:text-blue-600"/>  
                        <FaInstagram className="cursor-pointer hover:text-red-600"/>  
                        <FaWhatsapp className="cursor-pointer hover:text-green-600"/>  
                    </div>  
                    <p className="mt-6 text-sm md:text-base">We typically respond within 12 hours.</p>
                </div>  

                {/* Second Column - Contact Form */}
                <div className="p-6 rounded-xl shadow-md w-full md:w-1/2">  
                    <h5 className="text-xl font-semibold text-blue-950">Send Us a Message</h5>  
                    <form onSubmit={handleSubmit} className="mt-4 space-y-4">  
                        <input  
                            type="email"  
                            placeholder="Your Email"  
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            required  
                            className="w-full p-3 border rounded-md text-lg"  
                        />  

                        <textarea  
                            placeholder="Your Message"  
                            value={message}  
                            onChange={(e) => setMessage(e.target.value)}  
                            required  
                            className="w-full p-3 border rounded-md h-32 text-lg"  
                        ></textarea>  
                        <button  
                            type="submit"  
                            className="w-full p-3 bg-blue-950 text-white rounded-md hover:bg-blue-700 text-lg"  
                        >Send Message</button>  
                    </form>  
                </div>  
            </div>  
        </div>  
    );  
}

export default GetInTouch;  
