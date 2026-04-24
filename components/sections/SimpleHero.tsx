
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function SimpleHero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6 md:px-12 overflow-visible"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="relative z-10 lg:pr-12 order-2 lg:order-1 overflow-visible min-w-0 pt-4">
          <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-8 whitespace-nowrap overflow-visible">
            <span className="block bg-gradient-to-r from-gray-900 via-slate-800 to-black bg-clip-text text-transparent">
              Enterprise
            </span>
            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>

          <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg">
            Transform teams with proven programs designed by industry leaders.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">20K+</h3>
              <p className="text-gray-600 text-sm">Professionals Trained</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₹15-40L</h3>
              <p className="text-gray-600 text-sm">Avg CTC Placed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600 text-sm">Interview Guarantee</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0">
            Start Your Journey
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="relative z-0 order-1 lg:order-2">
          <img
            src="/team-work.png"
            alt="Team collaboration"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-3xl -z-10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}

