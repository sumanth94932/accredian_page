"use client";

import { useEffect, useState } from 'react';

interface Program {
  id: number;
  title: string;
  category: string;
  duration: string;
  description: string;
  bonusReferrer: string;
  bonusReferee: string;
  image: string;
  rating: number;
}

export default function ProgramTable() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/Data')
      .then(res => res.json())
      .then((data: Program[]) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">Loading programs...</div>
      </section>
    );
  }

  return (
    <section id="programs" className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-slate-700 bg-clip-text text-transparent mb-6">
          Our Flagship <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text">Enterprise Programs</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Job-ready bootcamps designed with industry leaders. 100% placement assistance guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {programs.map((program) => (
          <div key={program.id} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-blue-200">
            <div className="flex items-start gap-6 mb-6">
              <img src={program.image} alt={program.title} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span>{program.category}</span> • <span>{program.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">{program.title}</h3>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(program.rating) ? 'fill-current text-orange-400' : 'text-gray-300'}`} viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6 5.954 1.416 8.238L12 21.947l-7.416 3.904 1.416-8.238-6-5.954 8.332-1.151z"/>
                  </svg>
                ))}
                <span>({program.rating})</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{program.bonusReferrer}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Referrer Bonus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{program.bonusReferee}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Referee Bonus</div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
