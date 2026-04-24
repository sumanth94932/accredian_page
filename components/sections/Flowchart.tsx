import React from 'react';
import { GraduationCap, Clock, Award, Users, ArrowRight } from 'lucide-react';

interface Step {
  icon: any;
  title: string;
  desc: string;
  color: string;
}

const steps: Step[] = [
  { 
    icon: GraduationCap, 
    title: 'Skill Gap Analysis', 
    desc: 'Assess team needs with industry benchmarks',
    color: 'from-blue-500 to-indigo-600'
  },
  { 
    icon: Clock, 
    title: 'Custom Roadmap', 
    desc: 'Tailored 12-month learning journey',
    color: 'from-orange-500 to-red-600'
  },
  { 
    icon: Award, 
    title: 'Hands-On Training', 
    desc: '500+ hrs projects + live mentorship',
    color: 'from-emerald-500 to-teal-600'
  },
  { 
    icon: Users, 
    title: 'Placement Success', 
    desc: 'Guaranteed outcomes with top enterprises',
    color: 'from-purple-500 to-violet-600'
  },
];

export default function Flowchart() {
  return (
<section id="flow" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Your Enterprise Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven 4-step flowchart that transformed 20K+ careers
          </p>
        </div>
        
        <div className="relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
              </marker>
            </defs>
            {[0,1,2].map((index) => (
              <path
                key={`line-${index}`}
                d="M 600 100 Q 950 100 950 250 Q 950 400 600 400 Q 250 400 250 250 Q 250 100 600 100"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
              />
            ))}
          </svg>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-orange-200"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/80 group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

