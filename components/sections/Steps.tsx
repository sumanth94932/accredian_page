import { UserPlus, ClipboardList, Wallet } from 'lucide-react';

import { GraduationCap, Clock, Award, Users } from 'lucide-react';

export default function Steps() {
  const whySteps = [
    { 
      icon: <GraduationCap className="w-16 h-16 text-orange-500 drop-shadow-lg" />, 
      title: "Industry-Vetted Curriculum", 
      text: "Programs designed with FAANG leaders & top enterprises. Every module tested in production environments." 
    },
    { 
      icon: <Clock className="w-16 h-16 text-blue-500 drop-shadow-lg" />, 
      title: "Fast-Track Learning", 
      text: "12 months to job-ready mastery. Live mentorship + 500+ hours hands-on projects. No theory overload." 
    },
    { 
      icon: <Award className="w-16 h-16 text-emerald-500 drop-shadow-lg" />, 
      title: "Guaranteed Outcomes", 
      text: "100% interview guarantee with 50+ hiring partners. 3K+ students placed at ₹15-40 LPA CTC." 
    },
    { 
      icon: <Users className="w-16 h-16 text-purple-500 drop-shadow-lg" />, 
      title: "Enterprise Network", 
      text: "Direct access to Google, Amazon, Deloitte, Accenture recruiters. Dedicated placement cell." 
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-blue-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-slate-700 to-blue-800 bg-clip-text text-transparent mb-6">
            Why Choose <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text">Accredian Enterprise</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the 20K+ professionals who've accelerated their careers. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {whySteps.map((step, i) => (
            <div key={i} className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/50 hover:border-orange-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
