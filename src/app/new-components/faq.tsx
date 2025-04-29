'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Does 2% Cashback* On Health-Plus.Com Mean?",
      answer: "*Cashback rewards are good only for monetary value toward the purchase of a new product on www.health-plus.com. Not valid for products purchased through Health Plus subscriptions.",
    },
    {
      question: "How Do I Become A Member?",
      answer: "Becoming a member is easy! Simply create an account on our website, verify your email, and choose from our membership plans. Basic membership is free, while premium plans offer additional benefits.",
    },
    {
      question: "How Can I Cancel My Membership?",
      answer: "You can cancel your membership at any time by logging into your account, navigating to membership settings, and selecting 'Cancel Membership'. Refunds are processed according to our refund policy.",
    },
    {
      question: "Can I Stack Discounts?",
      answer: "Unfortunately, discounts cannot be stacked. Only one promotional code or discount can be applied to an order at checkout. However, cashback rewards can be used alongside promotional discounts.",
    },
    {
      question: "Which Orders Are Eligible For Cashback?",
      answer: "All orders of regular-priced items purchased directly through our website are eligible for cashback rewards. Sale items, subscription products, and gift cards are excluded from the cashback program.",
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className=" bg-gray-100 py-6 md:py-8 max-w-[1240px] mx-4 md:mx-auto rounded-lg md:rounded-2xl mb-7 md:mb-10 lg:mb-20 ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Overcoming Distrust with Effective Communication Tools for Better Understanding and Stronger Relationships
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-md md:rounded-xl p-4 md:p-6 shadow-sm transition-all duration-300 ease-in-out"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-medium text-gray-800">{faq.question}</h3>
                <button className="bg-gray-200 rounded-full p-1 md:p-2 hover:bg-gray-300">
                  {openQuestion === index ? <Minus className='h-5 w-5' /> : <Plus className='h-5 w-5' />}
                </button>
              </div>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="text-sm md:text-base overflow-hidden text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
