"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "About the Course",
    questions: [
      {
        q: "What is the duration of the programs?",
        a: "Programs range from 6 weeks to 6 months depending on the complexity and depth required for enterprise teams."
      },
      {
        q: "Are these programs certified?",
        a: "Yes, all programs come with Accredian Enterprise certification recognized by Fortune 500 companies."
      },
      {
        q: "What is the format - online or offline?",
        a: "Flexible hybrid format - live online sessions + optional onsite workshops for teams."
      }
    ]
  },
  {
    category: "About the Delivery",
    questions: [
      {
        q: "How are trainers selected?",
        a: "Trainers have 10+ years industry experience from FAANG, McKinsey, Deloitte with proven training expertise."
      },
      {
        q: "What is the batch size?",
        a: "Maximum 25 participants per batch for personalized attention and interaction."
      },
      {
        q: "Is there post-training support?",
        a: "Yes, 6 months implementation support + dedicated relationship manager."
      }
    ]
  },
  {
    category: "Miscellaneous",
    questions: [
      {
        q: "Can we customize for specific industries?",
        a: "Yes, 100% customizable. We create industry-specific case studies and frameworks."
      },
      {
        q: "What is the refund policy?",
        a: "Full refund within 7 days. Pro-rata after program commencement."
      },
      {
        q: "How do we measure ROI?",
        a: "Pre/post skill assessments + 360 feedback + productivity metrics tracking."
      }
    ]
  }
];

export default function Faqs() {
  const [openCategories, setOpenCategories] = useState([0]);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faqs" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
  {faqs.map((faq, categoryIndex) => (
    <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div 
        className="p-8 border-b border-gray-100 cursor-pointer flex items-center justify-between group hover:bg-gray-50 transition-all"
        onClick={() => toggleCategory(categoryIndex as number)}
      >
        <h3 className="text-2xl font-bold text-gray-900">{faq.category}</h3>
        {openCategories.includes(categoryIndex) ? <ChevronUp className="w-6 h-6 text-gray-500" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
      </div>
      {openCategories.includes(categoryIndex) && (
        <div className="divide-y divide-gray-100">
          {faq.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <div 
                className="p-8 cursor-pointer flex items-center justify-between hover:bg-blue-50 transition-all"
                onClick={() => toggleQuestion(categoryIndex as number, questionIndex as number)}
              >
                <span className="text-lg font-semibold text-gray-700">{question.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openQuestions[`${categoryIndex}-${questionIndex}`] ? 'rotate-180' : ''}`} />
              </div>
              {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                <div className="p-8 pt-0 pb-12 text-gray-600 leading-relaxed">
                  {question.a}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
        </div>
      </div>
    </section>
  );
}
