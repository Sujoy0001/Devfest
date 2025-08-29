import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollFloat from "../animations/ScrollFloat";
import icon1 from "../assets/icons/Asset 12-rxbb.png"
import icon2 from "../assets/icons/Asset 13-rxbb.png"

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "What is DevFest?",
      answer:
        'DevFest is Google Developers’ annual community-led event series, bringing together developers, tech enthusiasts, and innovators to learn, share, and build together.',
      open: false,
    },
    {
      question: "Who can Participate in DevFest?",
      answer:
        'Anyone passionate about technology-students, professionals, entrepreneurs, designers, and developers-can join DevFest.',
      open: false,
    },
    {
      question: "How to Register in DevFest?",
      answer:
        'You can register through the official GDG/DevFest website or your local GDG chapter’s event page. Slots often fill fast, so grab yours early!',
      open: false,
    },
    {
      question: "Why should we attend DevFest?",
      answer:
        'DevFest offers hands-on workshops, expert talks, networking opportunities, hackathons, and a chance to explore the latest in tech-all while being part of a global developer community.',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <section className="py-4 sm:py-16 lg:py-8 overflow-x-hidden">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 w-full">
            <img src={icon1} alt="icon" className="h-10 md:h-12 mb-8 w-auto" />
            <ScrollFloat
              animationDuration={3}
              ease="back.inOut(3)"
              scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Frequently Asked Questions
          </ScrollFloat><img src={icon2} alt="icon" className="h-10 md:h-12 mt-12 w-auto" /></div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-8">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? index % 2 === 0
                      ? -40
                      : 40 // mobile smaller slide
                    : index % 2 === 0
                    ? -100
                    : 100, // desktop bigger slide
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="transition-all cursor-pointer duration-200 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg shadow-sm"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    item.open ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: item.open ? "auto" : 0,
                  opacity: item.open ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden px-4 sm:px-6"
              >
                <p
                  className="pb-5 sm:pb-6 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      
      <div className="mx-w-3xl flex text-center">
        <p className="text-gray-700 mx-auto text-base md:text-lg leading-relaxed mt-6">
          <span className="font-semibold">Note:</span> ✨ DevFest isn’t just about cool swags-it’s about cool devs!  
          <br />
          So, enjoy the goodies, but dive into the sessions, learn, grow, and who knows… maybe unlock even more surprises! 🚀
        </p></div>
      </div>
    </section>
  );
};

export default Faq;
