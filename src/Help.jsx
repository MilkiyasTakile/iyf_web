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
        <div className="px-4 max-w-screen-lg mx-auto mt-10 ml-20">
            <h6 className="text-blue-950 text-lg font-semibold">NEED HELP? </h6>
            <h4 className="text-3xl md:text-4xl font-bold text-blue-950">
                 Frequently Asked Questions
            </h4>

            <div className="flex flex-col md:flex-row  space-x-10">
                <div className="p-6 rounded-4xl shadow-md w-full md:w-1/2">
                    <p className="text-lg md:text-2xl text-blue-950 mt-4">
                        Join IYF to connect with mentors, participate in discussions, and access leadership resources.
                    </p>
                    <img src={community} alt="Community" className="lg:w-full hover:scale-105 transition-all "/>
                </div>

                <div className="p-6 rounded-4xl shadow-md w-full md:w-1/2">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className=" bg-white rounded-2xl pb-2 cursor-pointer mt-10">
                                <strong className="flex justify-between items-center text-2xl" onClick={() => toggleFAQ(index)}>
                                    <span>{faq.question}</span>
                                    <span>{openFAQ === index ? "-" : "+"}</span>
                                </strong>
                                {openFAQ === index && <p className="mt-2 text-lg">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
