import community from "./assets/help.jpg";
import { useState } from "react";

function Help() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        { question: "How do I join the IYF community?", answer: "Visit our 'Join Us' page and follow the registration steps to become a member." },
        { question: "Are mentorship opportunities available?", answer: "Yes! We connect young individuals with experienced mentors for guidance on leadership and career development." },
        { question: "What leadership programs does IYF offer?", answer: "IYF provides training programs, workshops, and networking events to help young leaders grow and succeed." },
        { question: "How can I contribute to IYF initiatives?", answer: "You can volunteer, participate in discussions, and share insights through forums and leadership events." }
    ];

    return (
        <div className="px-4 max-w-screen-lg mx-auto mt-10">
            <h6 className="text-blue-950 text-lg md:text-xl font-semibold text-center md:text-left">NEED HELP?</h6>
            <h4 className="text-2xl md:text-4xl font-bold text-blue-950 text-center md:text-left">
                Frequently Asked Questions
            </h4>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
                {/* Image Section */}
                <div className="p-6 rounded-xl shadow-md w-full md:w-1/2 flex justify-center">
                    <img src={community} alt="Community" className="w-full max-w-xs md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>

                {/* FAQ Section */}
                <div className="p-6 rounded-xl shadow-md w-full md:w-1/2">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 cursor-pointer">
                                <strong className="flex justify-between items-center text-lg md:text-2xl" onClick={() => toggleFAQ(index)}>
                                    <span>{faq.question}</span>
                                    <span>{openFAQ === index ? "-" : "+"}</span>
                                </strong>
                                {openFAQ === index && <p className="mt-2 text-sm md:text-lg">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
