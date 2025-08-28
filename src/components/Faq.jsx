import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollFloat from "../animations/ScrollFloat";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "How to create an account?",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "How can I make payment using Paypal?",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "Can I cancel my plan?",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "How can I reach to support?",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
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
        <div className="max-w-2xl mx-auto text-center">
          <ScrollFloat
            animationDuration={3}
            ease="back.inOut(3)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Frequently Asked Questions
          </ScrollFloat>

          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
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
      </div>
    </section>
  );
};

export default Faq;
