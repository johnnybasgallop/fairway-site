import React, { useState } from "react";

const faqsData = [
  {
    question: "Why does our algorithm have an edge?",
    answer: "Refer to 'how it works' page on website.",
  },
  {
    question: "What instruments do we trade?",
    answer:
      "We trade XAU/USD (Gold/US Dollar), a commodity, and EUR/USD a currency pair.",
  },
  {
    question: "How does our manual trading work?",
    answer:
      "Majority of our manual trading is done over long periods of time, positioning in long hold positions over HTF high conviction moves, please refer to the 'how it works' section to learn more.",
  },
  {
    question: "How much capital do I need to get started?",
    answer:
      "We have no ‘minimum’ deposit for our fund as we believe in building trust with our clients prior to larger deposits being made.",
  },
  {
    question: "How can I learn more about how it works?",
    answer:
      "Book a call with the team to speak with the both our traders about the systems and client managers regarding onboarding.",
  },
  {
    question: "What is the profit split?",
    answer:
      "We take 20% of client profits on a monthly basis which is fully automated through our trusted broker. (A losing month will carry that lose to the next month)",
  },
  {
    question: "How and when can I withdraw my funds?",
    answer:
      "You can process withdrawals via the vantage investor portal to your main vantage portal.",
  },
  {
    question: "Does Fairway Capital hold my funds?",
    answer:
      "No! We use a PAMM system provided by Vantage which allows to combine all of our clients deposits for enhanced trading power, whilst not having access to any of the funds ourselves.",
  },
  {
    question: "What is a pamm?",
    answer: "Percentage Allocation Money Manager.",
  },
  {
    question: "How can I track my performance?",
    answer: "By using the Vantage investor portal.",
  },
  {
    question: "Who is your brokerage partner?",
    answer:
      "We are partnered with Vantage International one of the world’s most trusted and renowned trading platforms.",
  },
  {
    question: "What is the greatest risk to investing in financial markets?",
    answer:
      "Investing in financial markets can impose a number of risks due to the volatility of the markets. It is advised that clients only invest what they are comfortable losing. Whilst we risk manage appropriate, we are not in control of market movements.",
  },
  {
    question: "Is your strategy dynamic and able to adapt with the markets?",
    answer:
      "As a hedge fund, we never want to be left in the past, our goal is to be utilising the newest and best systems for growth in profitability and as a company. We are able to constantly adapt our systems and change with the times to stay updated with market conditions and movements.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div key={faq.question} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-left text-lg font-medium">
                {faq.question}
              </span>
              <span className="ml-2 text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
