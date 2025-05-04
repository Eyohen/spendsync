import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  // Use an array of objects for FAQ items
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "How does the AI-powered inventory system work?",
      answer: "Our system uses advanced natural language processing (NLP) to simplify inventory management. You can type instructions like 'Add 50 units of blue T-shirts' or 'Show me a report of all items sold this month,' and the LLM will execute these tasks seamlessly.",
      isOpen: false
    },
    {
      id: 2,
      question: "Is there a free trial available",
      answer: "Yes! You can start with our free plan, which offers core features to help you manage your inventory for 14 days only.",
      isOpen: false
    },
    {
      id: 3,
      question: "What happens if i exceed the free plan's user limit",
      answer: "After our 14 days free plan, you will be required to pay our subscription fee (monthly) which enables you enjoy our premium features for advanced analytics and collaborative features.",
      isOpen: false
    },
    {
      id: 4,
      question: "How do you protect my data",
      answer: "We take data security seriously. Your information is encrypted, and we adhere to industry-standard practices to ensure your data remains private and protected.",
      isOpen: false
    },
    {
      id: 5,
      question: "Is the app suitable for small businesses",
      answer: "Definitely! The system is designed with small businesses in mind. It’s affordable, user-friendly, and helps save time by automating repetitive tasks.",
      isOpen: false
    },
    {
      id: 6,
      question: "What makes this app different from others",
      answer: "Our system uses LLMs as it’s core function for inventory management. Making it different from regular system. Geninv does the heavy lifting so you don’t have to.",
      isOpen: false
    },
    
  ]);

  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 xl:px-[300px] py-12 max-w-[1920px] mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
        Frequently asked questions
      </h2>

      <p className='text-center text-xl text-gray-500 mt-4 mb-8'>Everything you need to get started and make the most of our app.</p>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded-lg hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium pr-8">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {item.isOpen ? (
                    <IoIosArrowUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <IoIosArrowDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </div>
              {item.isOpen && (
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                  {item.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ items data
const faqData = [
  {
    id: 1,
    question: "How can Pigeonhire help my business grow?",
    answer: "Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand your reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals."
  },
  {
    id: 2,
    question: "What makes Pigeonhire different from other community engagement platforms?",
    answer: "Unlike other platforms, Pigeonhire offers a unique combination of local and global community access, precise targeting capabilities, and flexible pricing options. Our focus on creating meaningful connections and providing detailed analytics sets us apart, ensuring that your engagement efforts are effective and measurable."
  },
  // ... Add all other FAQ items here
];

export default FAQ;